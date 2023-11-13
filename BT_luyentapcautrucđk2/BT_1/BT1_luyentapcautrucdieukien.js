function convertCelsiusToFahrenheit() {
    let celsiusInput = document.getElementById("celsiusInput");
    let result = document.getElementById("result");

    let celsius = parseFloat(celsiusInput.value);
    let fahrenheit = (celsius * 9/5) + 32;

    if (isNaN(fahrenheit)) {
        result.innerHTML = "Vui lòng nhập một giá trị hợp lệ.";
    } else {
        result.innerHTML = celsius + " độ C = " + fahrenheit.toFixed(2) + " độ F.";
    }
}