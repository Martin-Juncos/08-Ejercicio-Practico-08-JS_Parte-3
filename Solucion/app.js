const input = document.getElementById("tareaInput");
const boton = document.getElementById("btnAgregar");
const lista = document.getElementById("listaTareas");

let tareas = [];

// Guardar en localStorage
function guardarTareasEnStorage() {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

// Cargar desde localStorage
function cargarTareasDesdeStorage() {
  const datos = localStorage.getItem("tareas");
  if (datos) {
    tareas = JSON.parse(datos);
    tareas.forEach((tarea) => {
      const li = crearTareaConEvento(tarea);
      lista.appendChild(li);
    });
  }
}

// Crear <li> con texto y botón de eliminar
function crearTareaConEvento(texto) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = texto;

  const btn = document.createElement("button");
  btn.textContent = "Eliminar";

  btn.addEventListener("click", () => {
    li.remove();
    tareas = tareas.filter((t) => t !== texto);
    guardarTareasEnStorage();
  });

  li.appendChild(span);
  li.appendChild(btn);
  return li;
}

// Agregar tarea
function agregarTarea() {
  const texto = input.value.trim();
  if (texto !== "") {
    tareas.push(texto);
    guardarTareasEnStorage();
    const li = crearTareaConEvento(texto);
    lista.appendChild(li);
    input.value = "";
    input.focus();
  }
}

boton.addEventListener("click", agregarTarea);

// Cargar tareas al inicio
cargarTareasDesdeStorage();
