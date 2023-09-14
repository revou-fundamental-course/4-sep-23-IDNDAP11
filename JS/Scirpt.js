function calculateSquareArea() {
  const sisi = parseFloat(document.getElementById("luas-sisi").value);
  const luas = sisi * sisi;
  return luas;
}

function calculateSquarePerimeter() {
  const sisi = parseFloat(document.getElementById("keliling-sisi").value);
  const keliling = 4 * sisi;
  return keliling;
}

function updateSquareAreaResult() {
  const luasPersegiResult = calculateSquareArea();
  document.getElementById("luas-result").textContent = luasPersegiResult;
}

function updateSquarePerimeterResult() {
  const kelilingPersegiResult = calculateSquarePerimeter();
  document.getElementById("keliling-result").textContent =
    kelilingPersegiResult;
}

document
  .getElementById("luas-calculate-button")
  .addEventListener("click", updateSquareAreaResult);
document
  .getElementById("keliling-calculate-button")
  .addEventListener("click", updateSquarePerimeterResult);

function restartCalculator() {
  document.getElementById("luas-sisi").value = "";
  document.getElementById("keliling-sisi").value = "";
  document.getElementById("luas-result").textContent = "";
  document.getElementById("keliling-result").textContent = "";
}

document
  .getElementById("restart-button")
  .addEventListener("click", restartCalculator);
