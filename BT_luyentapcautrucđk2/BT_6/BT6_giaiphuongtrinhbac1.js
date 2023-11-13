function solveLinear() {
    // Lấy các giá trị từ input
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);

    // Kiểm tra a có bằng 0 hay không
    if (a === 0) {
        if (b === 0) {
            document.getElementById("result").innerHTML = "Phương trình vô số nghiệm.";
        } else {
            document.getElementById("result").innerHTML = "Phương trình vô nghiệm.";
        }
    } else {
        let x = -b / a;
        document.getElementById("result").innerHTML = "Nghiệm của phương trình là x = " + x;
    }
}