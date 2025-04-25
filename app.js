// Seleccionar los elementos principales
const input = document.getElementById("tareaInput");
const boton = document.getElementById("btnAgregar");
const lista = document.getElementById("listaTareas");

// Crear array para almacenar las tareas
let tareas = [];

// Función: guardar tareas en LocalStorage
function guardarTareasEnStorage() {
  // Convertir el array a string y guardar
  // 👉 completar aquí:
}

// Función: cargar tareas desde LocalStorage
function cargarTareasDesdeStorage() {
  // Obtener los datos guardados y convertir a array
  // 👉 completar aquí:
  // 👉 recorrer el array y agregar cada tarea al DOM
}

// Función: crear un elemento <li> con el texto y un botón
function crearTareaConEvento(texto) {
  const li = document.createElement("li");

  // Crear el span y asignar el texto
  // 👉 completar aquí:

  // Crear el botón y su texto
  // 👉 completar aquí:

  // Agregar evento al botón para eliminar la tarea
  // 👉 completar aquí:

  // Agregar span y botón al <li>
  // 👉 completar aquí:

  return li;
}

// Función: agregar tarea desde el input
function agregarTarea() {
  const texto = input.value.trim();

  if (texto !== "") {
    // Agregar la tarea al array
    // 👉 completar aquí:

    // Guardar en storage
    // 👉 completar aquí:

    // Crear y agregar la tarea al DOM
    // 👉 completar aquí:

    input.value = "";
    input.focus();
  }
}

// Evento de clic para agregar tarea
boton.addEventListener("click", agregarTarea);

// Al cargar la página, recuperar tareas
// 👉 llamar a la función correspondiente:
