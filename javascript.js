let inputText = document.querySelector("#text");
let copy = document.querySelector(".copy");
let para = document.querySelector(".para");
let len = document.querySelector(".len");
let inputLength = document.querySelector("#length");
let inputNumber = document.querySelector("#number");
let inputCharacter = document.querySelector("#character");
let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
let number = 1234567890
let character = "!@#$%^&*()_-+={}[]|\:;?/>.<,*"


// Getting length of range

len.textContent = inputLength.value

inputLength.addEventListener("input", (e) => {
    len.textContent = e.target.value
    if (inputNumber.checked == true && inputCharacter.checked == false) {
        randomNumber()
    }
    else if (inputNumber.checked == true && inputCharacter.checked == true) {
        randomCharacter()
    }
    else if (inputCharacter.checked == true && inputNumber.checked == false) {
        randomCharacterOnly()
    }
    else if (inputNumber.checked == false && inputCharacter.checked == false) {
        randomPass()
    }
})



// Getting random value for text only

let randomPass = function () {
    let pass = ""

    for (let i = 0; i < len.textContent; i++) {
        pass += alphabet[(Math.floor(Math.random() * 52))]
    }
    inputText.value = pass
}
randomPass()



// Getting random value for number and text

let randomNumber = function () {
    textNumber = alphabet + number
    let pass = ""

    for (let i = 0; i < len.textContent; i++) {
        pass += textNumber[(Math.floor(Math.random() * 62))]
    }
    inputText.value = pass
}


// Getting random value for character number and text

let randomCharacter = function () {
    textNumberCharacter = alphabet + number + character
    let pass = ""

    for (let i = 0; i < len.textContent; i++) {
        pass += textNumberCharacter[(Math.floor(Math.random() * 91))]
    }
    inputText.value = pass
}


// Getting random value for character and text only

let randomCharacterOnly = function () {
    textNumberCharacter = alphabet + character
    let pass = ""

    for (let i = 0; i < len.textContent; i++) {
        pass += textNumberCharacter[(Math.floor(Math.random() * 81))]
    }
    inputText.value = pass
}


// Copping the value of input

copy.addEventListener('click', () => {
    navigator.clipboard.writeText(inputText.value)
});