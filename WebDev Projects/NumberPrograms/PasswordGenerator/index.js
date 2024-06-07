function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    if (includeLowercase) allowedChars += lowercaseChars;
    if (includeUppercase) allowedChars += uppercaseChars;
    if (includeNumbers) allowedChars += numberChars;
    if (includeSymbols) allowedChars += symbolChars;

    if (length <= 0) {
        return "Password length must be at least 1";
    } else if (allowedChars.length == 0) {
        return "At least one set of characters must be selected.";
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

document.querySelectorAll('.toggle').forEach(button => {
    button.onclick = function() {
        button.classList.toggle('on');
        button.classList.toggle('off');
    };
});

document.getElementById("generate").onclick = function() {
    const length = Number(document.getElementById("length").value);
    // Constants return false if they aren't 'on'.
    const includeLowercase = document.getElementById("lowercase").classList.contains('on');
    const includeUppercase = document.getElementById("uppercase").classList.contains('on');
    const includeNumbers = document.getElementById("numbers").classList.contains('on');
    const includeSymbols = document.getElementById("symbols").classList.contains('on');

    const password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
    document.getElementById("output").textContent = `Generated password: ${password}`;
}


// function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
//     const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//     const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numberChars = "0123456789";
//     const symbolChars = "!@#$%^&*()_+-=";

//     let allowedChars = "";
//     let password = "";

//     allowedChars += includeLowercase ? lowercaseChars : "";
//     allowedChars += includeUppercase ? uppercaseChars : "";
//     allowedChars += includeNumbers ? numberChars : "";
//     allowedChars += includeSymbols ? symbolChars : "";

//     if (length <= 0) {
//         return "Password length must be at least 1";
//     }
//     else if (allowedChars.length == 0) {
//         return "At least one set of characters must be selected."
//     }

//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * allowedChars.length);
//         password += allowedChars[randomIndex]
//     }

//     return password;
// }

// const passwordLength = 12;
// const includeLowercase = true;
// const includeUppercase = true;
// const includeNumbers = true;
// const includeSymbols = true;

// const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

// console.log(`Generated password: ${password}`);