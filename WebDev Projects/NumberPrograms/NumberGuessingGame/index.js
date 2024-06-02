const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

// console.log(answer);

let attempts = 0;
let guess;

document.getElementById("myH3").textContent = `Guess a number between ${minNum} and ${maxNum}.`
    // guess = window.prompt();
    // guess = Number(guess);

function submitGuess() {
    guess = document.getElementById("myText").value;
    guess = Number(guess);

    if (isNaN(guess)) {
        document.getElementById("Result").textContent = "Enter a valid number.";
    }
    else if (guess < minNum || guess > maxNum) {
        document.getElementById("Result").textContent = "Enter a valid number.";
    }
    else {
        attempts++;
        if (guess < answer) {
            document.getElementById("Result").textContent = "Too low, try again.";
        }
        else if (guess > answer) {
            document.getElementById("Result").textContent = "Too high, try again.";
        }
        else {
            document.getElementById("Result").textContent = `Congrats, answer is ${answer}, taking you ${attempts} attempts.`;
        }
    }
}

document.getElementById("mySubmit").onclick = submitGuess;
document.getElementById("myText").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        submitGuess();
    }
});