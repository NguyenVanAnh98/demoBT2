function calculateRectangleArea() {
    let sideAInput = document.getElementById("sideAInput");
    let sideBInput = document.getElementById("sideBInput");
    let sideA = sideAInput.value;
    let sideB = sideBInput.value;
    let area = sideA * sideB;

    let result = document.getElementById("result");
    result.innerHTML = "Diện tích hình chữ nhật là: " + area;
}