function obtenerTareas() {
  const datos = localStorage.getItem("tareas");
  return datos ? JSON.parse(datos) : [];
}

const manejarTareas = (() => {
  let tareas = obtenerTareas();

  function agregarTarea() {
    const input = document.getElementById("tarea");
    const texto = input.value.trim();

    if (texto === "") return;

    tareas.push({
      id: Date.now(),
      texto: texto,
    });

    localStorage.setItem("tareas", JSON.stringify(tareas));
    input.value = "";
    renderizarTareas();
  }

  function eliminarTarea(id) {
    Swal.fire({
      title: "¿Eliminar tarea?",
      text: "No podrás recuperarla.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        tareas = tareas.filter((tarea) => tarea.id !== id);

        localStorage.setItem("tareas", JSON.stringify(tareas));

        renderizarTareas();
      }
    });
  }

  function renderizarTareas() {
    const lista = document.getElementById("listaTareas");

    lista.innerHTML = "";

    tareas.forEach((tarea) => {
      const li = document.createElement("li");

      li.className =
        "list-group-item d-flex justify-content-between align-items-center";

      li.textContent = tarea.texto;

      const boton = document.createElement("button");

      boton.className = "btn btn-danger btn-sm";
      boton.textContent = "Eliminar";

      boton.onclick = () => eliminarTarea(tarea.id);

      li.appendChild(boton);
      lista.appendChild(li);
    });

    document.getElementById("contador").textContent = tareas.length;
  }

  return {
    agregarTarea,
    renderizarTareas,
  };
})();

document.addEventListener("DOMContentLoaded", () => {
  manejarTareas.renderizarTareas();

  document
    .getElementById("btnAgregar")
    .addEventListener("click", manejarTareas.agregarTarea);
});
