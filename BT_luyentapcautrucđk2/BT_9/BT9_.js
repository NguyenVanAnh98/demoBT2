function checkTriangle() {
    // Lấy các giá trị từ input
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);

    // Kiểm tra điều kiện để a, b, c là cạnh của một tam giác
    if (a > 0 && b > 0 && c > 0 && a + b > c && b + c > a && a + c > b) {
        document.getElementById("result").innerHTML = "a, b, c là cạnh của một tam giác.";
    } else {
        document.getElementById("result").innerHTML = "a, b, c không phải là cạnh của một tam giác.";
    }
}