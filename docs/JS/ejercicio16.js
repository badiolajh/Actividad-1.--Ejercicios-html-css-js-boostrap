function Suma() {
  var sum = parseFloat(document.getElementById("sum").value);
  var sum2 = parseFloat(document.getElementById("sum2").value);
  var resultado = document.getElementById("resSum");
  var suma = sum + sum2;
  resultado.value = suma;
}

function Resta() {
  var res = parseFloat(document.getElementById("rest").value);
  var res2 = parseFloat(document.getElementById("rest2").value);
  var resultado2 = document.getElementById("resRest");
  var resta = res - res2;
  resultado2.value = resta;
}

function Multiplicacion() {
  var mul = parseFloat(document.getElementById("mul").value);
  var mul2 = parseFloat(document.getElementById("mul2").value);
  var resultado3 = document.getElementById("resMul");
  var multi = mul * mul2;
  resultado3.value = multi;
}

function Div() {
  var div = parseFloat(document.getElementById("div").value);
  var div2 = parseFloat(document.getElementById("div2").value);
  var resultado4 = document.getElementById("resDiv");
  var divicion = div * div2;
  resultado4.value = divicion;
}

function Calc() {
  Suma();
  Resta();
  Multiplicacion();
  Div();
}
