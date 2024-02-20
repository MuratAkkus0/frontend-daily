// Selecting Elements
const sudokuContainer = document.querySelector('.sudoku-container');
const popupContainer = document.querySelector(".popup-container");
// Variables
let sudokuBoxList;
let sudokuDefault = {
    0: [4, 5, "", "", "", "", "", "", ""],
    1: ["", "", 2, "", 7, "", 6, 3, ""],
    2: ["", "", "", "", "", "", "", 2, 8],
    3: ["", "", "", 9, 5, "", "", "", ""],
    4: ["", 8, 6, "", "", "", 2, "", ""],
    5: ["", 2, "", 6, "", "", 7, 5, ""],
    6: ["", "", "", "", "", "", 4, 7, 6],
    7: ["", 7, "", "", 4, 5, "", "", ""],
    8: ["", "", 8, "", "", 9, "", "", ""],

}

let sudokuKeys = {
    0: [4, 5, 3, 8, 2, 6, 1, 9, 7],
    1: [8, 9, 2, 5, 7, 1, 6, 3, 4],
    2: [1, 6, 7, 4, 9, 3, 5, 2, 8],
    3: [7, 1, 4, 9, 5, 2, 8, 6, 3],
    4: [5, 8, 6, 1, 3, 7, 2, 4, 9],
    5: [3, 2, 9, 6, 8, 4, 7, 5, 1],
    6: [9, 3, 5, 2, 1, 8, 4, 7, 6],
    7: [6, 7, 1, 3, 4, 5, 9, 8, 2],
    8: [2, 4, 8, 7, 6, 9, 3, 1, 5],
}

//Set Sudoku Box in Sudoku Area
setBox()
function setBox() {
    for (let i1 = 0; i1 < 9; i1++) {
        for (let i2 = 0; i2 < 9; i2++) {
            sudokuContainer.innerHTML += `<input type="text" class="sudoku-box" data-row="${i1}" data-column="${i2}" >`
        }
    }
    setDefaultNumbers();
}
// Set Default Keys
function setDefaultNumbers() {
    const sudokuBoxes = document.querySelectorAll('.sudoku-box');
    sudokuBoxes.forEach((box) => {
        box.value = sudokuDefault[box.dataset.row][box.dataset.column];
        if (box.value) {
            box.classList.add('input-disabled');
        }
        else {
            //box.addEventListener('focus',catchClick);
            box.addEventListener('keyup', numberCheck);
        }
    })
    sudokuBoxList = sudokuBoxes;
}
// Number Check Function
function numberCheck(e) {
    let text = e.target.value;
    console.log(e.keyCode)
    if (e.keyCode >= 49 && e.keyCode <= 57) {
        if (text == sudokuKeys[e.target.dataset.row][e.target.dataset.column]) {
            e.target.disabled = true;
            e.target.style.backgroundColor = "";
            isEndOfGame();
        }
        else {
            e.target.style.backgroundColor = "rgb(227, 88, 88)";
            e.target.style.outline = "0"
            if (e.target.value.length > 1) {
                showPopup("Please give a number between 1-9")
                e.target.value = "";
            }
        }
    }
    else if (e.keyCode <= 90 && e.keyCode >= 65) {
        showPopup("Please give a number between 1-9")
        e.target.value = "";
    }
}
// show Message
function showPopup(msg) {
    let popupText = popupContainer.children[0].children[0];
    let okBtn = popupText.nextElementSibling;
    popupContainer.style.display = "flex";

    popupText.innerText = msg;
    if (okBtn.innerText == "Ok") {
        okBtn.onclick = () => {
            popupContainer.style.display = "none"

        }
    } else {
        okBtn.onclick = () => {
            popupContainer.style.display = "none"
            location.reload();
        }
    }

}
// End Of Game Function
function isEndOfGame() {
    let isGameOver = 0;
    let sudokuBoxes = document.querySelectorAll('.sudoku-box');
    console.log(sudokuBoxes)
    sudokuBoxes.forEach((box) => {
        if (box.value.length = 1) {
            isGameOver += 1;
        }
        if (isGameOver == 81) {
            showPopup("congratulations you won the game !")
            document.querySelector(".ok-btn").innerText = "New Game";
        }
    })

}


