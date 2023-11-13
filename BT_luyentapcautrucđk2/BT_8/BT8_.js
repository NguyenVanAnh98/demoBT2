function checkAge() {
    const ageInput = document.getElementById("ageInput");
    const age = parseInt(ageInput.value); // Chuyển đổi giá trị nhập vào thành số nguyên

    let result = ""; // Khởi tạo biến result

    if (Number.isInteger(age) && age > 0 && age < 120) {
        result = "Tuổi hợp lệ";
    } else {
        result = "Tuổi không hợp lệ";
    }

    const resultElement = document.getElementById("result");
    resultElement.textContent = result; // Sử dụng textContent thay vì innerHTML
}