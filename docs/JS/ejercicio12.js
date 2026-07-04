function MXaUSD(unidad) {
  var mxn = parseFloat(document.getElementById("mxn").value);
  var resultado = document.getElementById("usd");
  var usd = mxn * 0.055;
  resultado.value = usd;
}
