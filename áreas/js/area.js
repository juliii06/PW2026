function calcularAreas() {
  let lado = document.getElementById("lado").value;
  let baseR = document.getElementById("baseR").value;
  let alturaR = document.getElementById("alturaR").value;
  let baseT = document.getElementById("baseT").value;
  let alturaT = document.getElementById("alturaT").value;
  let raio = document.getElementById("raio").value;

  let areaQuadrado = lado * lado;
  let areaRetangulo = baseR * alturaR;
  let areaTriangulo = (baseT * alturaT) / 2;
  let areaCirculo = 3.14 * raio * raio;

  document.getElementById("resultado").innerText =
    "Quadrado: " + areaQuadrado +
    "\nRetângulo: " + areaRetangulo +
    "\nTriângulo: " + areaTriangulo +
    "\nCírculo: " + areaCirculo;
}