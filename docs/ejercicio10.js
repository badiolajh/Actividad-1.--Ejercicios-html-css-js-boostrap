function FaraCel(temp) {
  var gradosF = parseInt(document.getElementById("F").value);
  var resultado = document.getElementById("C");
  var celsius = (gradosF - 32) * (5 / 9);
  resultado.value = celsius;
}
