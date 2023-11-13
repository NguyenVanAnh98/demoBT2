function convertMeterToFeet() {
    let meterInput = document.getElementById("meterInput");
    let feet = meterInput.value * 3.28084;

    let result = document.getElementById("result");
    result.innerHTML = meterInput.value + " m = " + feet.toFixed(2) + " ft";
}