function calculateRightTriangleArea() {
    let sideAInput = document.getElementById("sideAInput");
    let sideBInput = document.getElementById("sideBInput");
    let sideA = sideAInput.value;
    let sideB = sideBInput.value;
    let area = (sideA * sideB) /2;

    let result = document.getElementById("result");
    result.innerHTML = "Diện tích tam giác vuông là: " + area;
}