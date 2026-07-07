let tareas = obtenerTareas();

function agregarTarea() {
  const input = document.getElementById("tarea");
  const texto = input.value.trim();

  if (texto === "") {
    return;
  }
  tareas.push({
    id: Date.now(),
    texto: texto,
  });

  localStorage.setItem("tareas", JSON.stringify(tareas));
  input.value = "";
  renderizarTareas();
}

function obtenerTareas() {
  const datos = localStorage.getItem("tareas");
  if (datos) {
    return JSON.parse(datos);
  }
  return [];
}

function eliminarTarea(id) {
  tareas = tareas.filter((tarea) => tarea.id !== id);
  localStorage.setItem("tareas", JSON.stringify(tareas));
  renderizarTareas();
}

function renderizarTareas() {
  const lista = document.getElementById("listaTareas");

  lista.innerHTML = "";
  tareas.forEach((tarea) => {
    const li = document.createElement("li");
    li.textContent = tarea.texto;
    const boton = document.createElement("button");
    boton.textContent = "Eliminar";
    boton.onclick = () => eliminarTarea(tarea.id);
    li.appendChild(boton);
    lista.appendChild(li);
  });

  document.getElementById("contador").value = tareas.length;
}

//Funciones closure() //recuerda eentorno lexico

const manejarTareas = (() => {
  let tareas = obtenerTareas();

  function agregarTarea() {}

  function eliminarTarea(id) {}

  function renderizarTareas() {}

  return {
    agregarTarea,
    eliminarTarea,
    renderizarTareas,
  };
})();

document.addEventListener("DOMContentLoaded", () => {
  renderizarTareas();
  document.getElementById("btnAgregar").addEventListener("click", agregarTarea);
});
