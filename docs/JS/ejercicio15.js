/*Arreglo vacio de estudiantes */
const estudiantes = [];

/*Funcion para el boton de "Calcular" */
function Calc() {
  /*Muestra la lista de estudiantes en la consola */
  estudiantes.forEach((estudiante) => {
    console.log(estudiante.nombre, estudiante.calificacion);
  });

  /*Calculo de promedio */
  let promedio =
    estudiantes.reduce(
      (total, estudiante) => total + estudiante.calificacion,
      0,
    ) / estudiantes.length;
  document.getElementById("promedio").value = promedio;

  /*Calificacion maxima y menor */
  let calificacionMaxima = Math.max(...estudiantes.map((e) => e.calificacion));
  document.getElementById("mayor").value = calificacionMaxima;

  let calificacionMinima = Math.min(...estudiantes.map((e) => e.calificacion));
  document.getElementById("menor").value = calificacionMinima;
}

/*Funcion para el boton de "Agregar Estudiante" */
function PushEst() {
  /*Ingresa estudiantes al arreglo al pulsar el boton */
  let ArNombre = document.getElementById("name").value;
  let ArCalificacion = Number(document.getElementById("cal").value);
  estudiantes.push({ nombre: ArNombre, calificacion: ArCalificacion });
}
