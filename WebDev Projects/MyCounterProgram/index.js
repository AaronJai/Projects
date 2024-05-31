const Decrease = document.getElementById("Decrease");
const Reset = document.getElementById("Reset");
const Increase = document.getElementById("Increase");
const Minus5 = document.getElementById("Minus5");
const Minus10 = document.getElementById("Minus10");
const Plus5 = document.getElementById("Plus5");
const Plus10 = document.getElementById("Plus10");

const CountLabel = document.getElementById("CountLabel");

let count = 0;

Increase.onclick = function(){
    count++;
    CountLabel.textContent = count;
}

Decrease.onclick = function(){
    count--;
    CountLabel.textContent = count;
}

Reset.onclick = function(){
    count = 0;
    CountLabel.textContent = count;
}

Minus5.onclick = function(){
    count -= 5;
    CountLabel.textContent = count;
}

Minus10.onclick = function(){
    count -= 10;
    CountLabel.textContent = count;
}
Plus5.onclick = function(){
    count += 5;
    CountLabel.textContent = count;
}
Plus10.onclick = function(){
    count += 10;
    CountLabel.textContent = count;
}


// document.getElementById("Increase").onclick = function(){
//     count++;
//     document.getElementById("CountLabel").textContent = count;
// }


// document.getElementById("Decrease").onclick = function(){
//     result = document.getElementById("CountLabel").value;
//     document.getElementById("Countlabel").textContent = result -= 1;
// }
