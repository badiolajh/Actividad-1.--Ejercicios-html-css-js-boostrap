function Calc() {
  let cadena = document.getElementById("num").value;
  let arreglo = cadena.split(",");
  let numeros = arreglo.map(Number);

  /*Para calcular mayor */
  var mayor = document.getElementById("mayor");
  mayor.value = Math.max(...numeros);

  /*Para calcular menor */
  var menor = document.getElementById("menor");
  menor.value = Math.min(...numeros);

  /*Para calcular promedio */
  let suma = numeros.reduce((acc, valor) => acc + valor, 0);
  let promedio = suma / numeros.length;

  var prom = document.getElementById("promedio");
  prom.value = promedio;
}
