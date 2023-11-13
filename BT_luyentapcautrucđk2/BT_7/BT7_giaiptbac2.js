function solveQuadratic() {
     let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);

    let delta = b * b - 4 * a * c;
    if (delta > 0) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.getElementById("result").innerHTML = "Phương trình có 2 nghiệm phân biệt:<br>x1 = " + x1 + "<br>x2 = " + x2;
    } else if (delta === 0) {
        let x = -b / (2 * a);
        document.getElementById("result").innerHTML = "Phương trình có 1 nghiệm kép:<br>x = " + x;
    } else {
        document.getElementById("result").innerHTML = "Phương trình không có nghiệm thực.";
    }
}
