function calculateSquareArea() {
    let sideInput = document.getElementById("sideInput");
    let side = sideInput.value;
    let area = side * side;

    let result = document.getElementById("result");
    result.innerHTML = "Diện tích hình vuông là: " + area;
}