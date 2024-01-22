let items = document.querySelectorAll("img");
let btn = document.querySelector(".btn");
let player = document.querySelector(".player-counting");
let comp = document.querySelector(".computer-counting");


let r = 0;
let s = 1;
let p = 2;

function genComptChoice() {
    let guess = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3);
    return guess[randomNumber];
}
function playGame(userChoice) {
    let comptChoice = genComptChoice();
    if (comptChoice === userChoice) {
        state = "draw";
        printDraw();
    }
    else {
        let userwin = true;
        if (userChoice == "rock") {
            userwin = comptChoice == "paper" ? false : true;
        }
        else if (userChoice = "paper") {
            userwin = comptChoice == "rock" ? true : false;
        }
        else {
            userwin = comptChoice == "paper" ? true : false;
        }
        printResult(userwin, userChoice, comptChoice);
    }

}

function printDraw() {
    btn.innerHTML = "It was Draw";
    btn.style.backgroundColor = "black";
}

function printResult(result, userChoice, comptChoice) {
    if (result) {
        btn.innerHTML = `You won! ${userChoice} beats ${comptChoice}`;
        player.innerText = Number(player.innerText) + 1;
        btn.style.backgroundColor = "Green";
    }
    else {
        btn.innerHTML = `You lost. ${comptChoice} beats ${userChoice}`;
        comp.innerText = Number(comp.innerText) + 1;
        btn.style.backgroundColor = "Red";
    }
}

items.forEach((e) => {
    e.addEventListener("click", (e) => {
        let userChoice = e.srcElement.alt;
        playGame(userChoice);
    })
})

