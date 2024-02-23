// Selecting Elements
const sudokuContainer = document.querySelector('.sudoku-container');
const squares = document.querySelectorAll(".square");
const popupContainer = document.querySelector(".popup-container");
const solverButton = document.querySelector(".solver-button");
// Variables
let sudokuBoxList;
let isGameOver = 0;
let sudokuDefault = {
    0: [4, 5, "", "", "", 2, "", "", ""],
    1: ["", "", "", "", 7, "", "", "", ""],
    2: ["", "", "", "", "", "", "", 2, 8],
    3: ["", "", "", 6, 3, "", "", 2, 8],
    4: ["", "", "", "", 8, 6, "", 2, ""],
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

//Event Listener for tip button
// solverButton.addEventListener("click", bruteForce);

//Set Sudoku Box in Sudoku Area
setBox()
function setBox() {

    for (let i1 = 0; i1 < 9; i1++) {
        for (let i2 = 0; i2 < 9; i2++) {
            squares[i2].innerHTML += `<input type="text" class="sudoku-box" data-box="square${i2}" >`
        }
    }
    const inputs = document.querySelectorAll(".sudoku-box")
    console.log(inputs)

    //setDefaultNumbers();
}
// // Set Default Keys
// function setDefaultNumbers() {
//     const sudokuBoxes = document.querySelectorAll('.sudoku-box');
//     sudokuBoxes.forEach((box) => {
//         box.value = sudokuDefault[box.dataset.row][box.dataset.column];
//         if (box.value) {
//             box.classList.add('input-disabled');
//         }
//         else {
//             //box.addEventListener('focus',catchClick);
//             box.addEventListener('keyup', numberCheck);
//         }
//     })
//     sudokuBoxList = sudokuBoxes;
//     countDefaultKeys();

// }
// // Default key counter

// function countDefaultKeys() {
//     for (let i = 0; i < Object.keys(sudokuDefault).length; i++) {
//         sudokuDefault[i].forEach((item, index) => {
//             if (typeof item === "number") {
//                 isGameOver += 1;
//                 disableDefaultInputs(i, index);
//             }
//         })

//     }
// }
// // Disable default numbers inputs
// function disableDefaultInputs(i, index) {
//     sudokuBoxList.forEach((box) => {
//         if (box.dataset.row == i && box.dataset.column == index) {
//             box.disabled = true;
//         }
//     })
// }




// // Number Check Function
// function numberCheck(e) {
//     let text = e.target.value;
//     if (e.keyCode <= 57 && e.keyCode >= 49 || e.keyCode >= 96 && e.keyCode <= 105) {
//         if (text == sudokuKeys[e.target.dataset.row][e.target.dataset.column]) {
//             e.target.disabled = true;
//             e.target.style.backgroundColor = "";
//             isGameOver += 1;
//             if (isGameOver === 81) {
//                 endOfGame();
//             }
//             return true;
//         } else {
//             e.target.style.backgroundColor = "rgb(230, 94, 94)";
//             e.target.style.outline = "0"
//             showPopup("Wrong Number Try again !")
//             e.target.value = "";
//         }
//         if (e.target.value.length > 1) {
//             showPopup("Please give a number between 1-9")
//             e.target.value = "";
//         }
//     }
//     else if ((e.keyCode >= 186 && e.keyCode <= 222) || (e.keyCode >= 106 && e.keyCode <= 111)) {
//         e.target.style.backgroundColor = "rgb(230, 94, 94)";
//         e.target.style.outline = "0"
//         if (e.target.value.length >= 1) {
//             showPopup("Please give a number between 1-9")
//             e.target.value = "";
//         }
//     }
//     else if (e.keyCode >= 65 && e.keyCode <= 90) {
//         e.target.style.backgroundColor = "rgb(230, 94, 94)";
//         e.target.style.outline = "0"
//         if (e.target.value.length >= 1) {
//             showPopup("Please give a number between 1-9")
//             e.target.value = "";
//         }
//     }
// }
// // show Message
// function showPopup(msg) {
//     let popupText = popupContainer.children[0].children[0];
//     let okBtn = popupText.nextElementSibling;
//     popupContainer.style.display = "flex";
//     window.addEventListener('keypress', (e) => {
//         if (e.key === 'Enter') {
//             okBtnEventListener(e);
//         }
//     })
//     popupText.innerText = msg;
//     okBtn.addEventListener('click', okBtnEventListener);
//     function okBtnEventListener(e) {
//         if (okBtn.innerText == "Ok") {
//             popupContainer.style.display = "none"
//         } else if (okBtn.innerText == "New Game") {
//             popupContainer.style.display = "none"
//             location.reload();
//         }
//     }


// }
// // End Of Game Function
// function endOfGame() {
//     let okBtn = document.querySelector('.ok-btn')
//     okBtn.addEventListener('click', () => {
//         window.location.reload();
//     });
//     showPopup("congratulations you won the game !")
//     document.querySelector(".ok-btn").innerText = "New Game";
// }

// // Sudoku Solver

// // let sudokuDefault = {
// //     0: [4, 5, "", "", "", "", "", "", ""],
// //     1: ["", "", 2, "", 7, "", 6, 3, ""],
// //     2: ["", "", "", "", "", "", "", 2, 8],
// //     3: ["", "", "", 9, 5, "", "", "", ""],
// //     4: ["", 8, 6, "", "", "", 2, "", ""],
// //     5: ["", 2, "", 6, "", "", 7, 5, ""],
// //     6: ["", "", "", "", "", "", 4, 7, 6],
// //     7: ["", 7, "", "", 4, 5, "", "", ""],
// //     8: ["", "", 8, "", "", 9, "", "", ""],
// let sudokuDefaultCol = {
//     0: [],
//     1: [],
//     2: [],
//     3: [],
//     4: [],
//     5: [],
//     6: [],
//     7: [],
//     8: [],
// }


// let squareNumbers = {
//     0: [],
//     1: [],
//     2: [],
//     3: [],
//     4: [],
//     5: [],
//     6: [],
//     7: [],
//     8: [],
// }
// let squarePossibilities = {
//     0: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     1: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     2: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     3: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     4: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     5: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     6: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     7: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     8: [1, 2, 3, 4, 5, 6, 7, 8, 9],
// }

// let rowPossibilities = {
//     0: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     1: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     2: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     3: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     4: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     5: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     6: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     7: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     8: [1, 2, 3, 4, 5, 6, 7, 8, 9],
// }
// let columnPossibilities = {
//     0: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     1: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     2: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     3: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     4: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     5: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     6: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     7: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     8: [1, 2, 3, 4, 5, 6, 7, 8, 9],
// }

// // updateting Possibilities Object
// function updatePosibilities() {
//     updateSquarePosibilities();
//     // find for each square possible numbers
//     function updateSquarePosibilities() {
//         updateRowPosibilities()
//         updateColumnPosibilities()

//         function findBox(row, index, sqrArray) {
//             for (let i = row; i < row + 3; i++) {
//                 for (let i2 = index; i2 < index + 3; i2++) {
//                     sqrArray.push(sudokuDefault[i][i2]);

//                 }
//             }
//         }
//         findBox(0, 0, squareNumbers[0]);
//         findBox(0, 3, squareNumbers[1]);
//         findBox(0, 6, squareNumbers[2]);
//         findBox(3, 0, squareNumbers[3]);
//         findBox(3, 3, squareNumbers[4]);
//         findBox(3, 6, squareNumbers[5]);
//         findBox(6, 0, squareNumbers[6]);
//         findBox(6, 3, squareNumbers[7]);
//         findBox(6, 6, squareNumbers[8]);
//         console.log(rowPossibilities)
//         console.log(columnPossibilities)
//         console.log(squareNumbers)
//     }
//     // Find for each row possible numbers
//     function updateRowPosibilities() {
//         findPosibleNums(sudokuDefault, rowPossibilities);
//     }
//     // Find for each column possible numbers
//     function updateColumnPosibilities() {
//         let currentColumnArray = [];
//         // Creating Column List As Object
//         for (let row = 0; row < 9; row++) {
//             for (let col = 0; col < 9; col++) {
//                 currentColumnArray.push(sudokuDefault[col][row])
//             }
//             sudokuDefaultCol[row] = currentColumnArray;
//             currentColumnArray = [];
//         }
//         findPosibleNums(sudokuDefaultCol, columnPossibilities);
//     }
//     // Genreal possible number finder for rows and columns
//     function findPosibleNums(defaultList, posibilityList) {
//         for (let i = 0; i < 9; i++) {
//             defaultList[i].forEach((item) => {
//                 if (typeof item === "number") {
//                     posibilityList[i].forEach((num, index) => {
//                         if (num == item) {
//                             posibilityList[i][index] = "";
//                         }
//                     })
//                 }
//             })

//         }
//         return posibilityList;
//     }
// }

// function bruteForce() {
//     updatePosibilities();

//     const sudokuBoxes = document.querySelectorAll('.sudoku-box');

//     sudokuBoxes.forEach((box) => {
//         if (box.value == "") {

//         }

//     })
//     function squareNumFind(){
        
//     }






// }
// rowControl()
// function rowControl() {
//     bruteForce()

// }
// function columnControl() {

// }
// function squareControl() {

// }
