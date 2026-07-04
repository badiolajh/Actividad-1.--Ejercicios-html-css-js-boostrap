function KmaMill(dist) {
  var kilomtrs = parseFloat(document.getElementById("Km").value);
  var resultado = document.getElementById("Mill");
  var millas = kilomtrs * 0.621371;
  resultado.value = millas;
}
