const textBox = document.getElementById("textBox");
const result = document.getElementById("result");
const toF = document.getElementById("toF");
const toC = document.getElementById("toC");
let temp;

function convert() {
    if (toF.checked) {
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F"         // for 1 decimal place
    }
    else if (toC.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(1) + "°C" 
    }
    else {
        document.getElementById("result").textContent = "Select a unit";
    }
}