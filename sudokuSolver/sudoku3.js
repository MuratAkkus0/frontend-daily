// Selecting Elements
const sudokuContainer = document.querySelector('.sudoku-container');
const popupContainer = document.querySelector(".popup-container");

let updatedSudokuDefault;
let sudokuBoxes;
let currentSudokuBox;
let currentRow;
let currentColumn = [];
let rowIndexNums;
let columnIndexNums;
let currentSquareRows;
let currentSquareColumns;
let currentSquareNumbers;
let possibleNumbers;
let isFinish = false;
// Brute Force Event Listener

const bruteForceBtn = document.querySelector('#bruteForce');
bruteForceBtn.addEventListener('click', bruteForceMain);

// Default Sudolu Numbers
let sudokuDefault = [
    [4, 5, "", "", "", "", "", "", ""],
    ["", "", 2, "", 7, "", 6, 3, ""],
    ["", "", "", "", "", "", "", 2, 8],
    ["", "", "", 9, 5, "", "", "", ""],
    ["", 8, 6, "", "", "", 2, "", ""],
    ["", 2, "", 6, "", "", 7, 5, ""],
    ["", "", "", "", "", "", 4, 7, 6],
    ["", 7, "", "", 4, 5, "", "", ""],
    ["", "", 8, "", "", 9, "", "", ""],
]

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
    sudokuBoxes = document.querySelectorAll('.sudoku-box');
    sudokuBoxes.forEach((box) => {
        box.value = sudokuDefault[box.dataset.row][box.dataset.column];
        if (box.value) {
            box.classList.add('input-disabled');
        }
    })
}
// Sudoku Solver 


function bruteForceMain() {
    getElementsFromHtml();
    getUpdatedSudokuDefault();
    getAllFreeSudokuBoxes();
}

function getUpdatedSudokuDefault() {
    updatedSudokuDefault = [];
    let rowArr = [];
    for (let i = 0; i < 9; i++) {
        sudokuBoxes.forEach((box) => {
            if (box.dataset.row == i) {
                if (box.value) {
                    rowArr.push(Number(box.value));
                } else {
                    rowArr.push(box.value);

                }
            }
        })
        updatedSudokuDefault.push(rowArr);
        rowArr = [];
    }
}

// Select Html Elements
function getElementsFromHtml() {
    sudokuBoxes = document.querySelectorAll('.sudoku-box');
}
function getAllFreeSudokuBoxes() {
    sudokuBoxes.forEach((box) => {
        if (!box.value) {
            currentSudokuBox = box;
            getCurrentBoxRow();
            getCurrentColumn();
            getCurrentSquareRows();
            getCurrentSquareColumns();
            getCurrentSquare();
            doBruteForce();
        }
    })
}

function getCurrentBoxRow() {
    currentRow = updatedSudokuDefault[currentSudokuBox.dataset.row];
}

function getCurrentColumn() {

    let colArr = [];
    for (let i = 0; i < 9; i++) {
        colArr.push(updatedSudokuDefault[i][currentSudokuBox.dataset.column])
    }
    currentColumn = colArr;
    colArr = [];
}

function getCurrentSquareRows() {
    let rowArray = [];
    rowIndexNums = calcMod(currentSudokuBox.dataset.row)
    for (let i = 0; i < 3; i++) {
        rowArray.push(updatedSudokuDefault[rowIndexNums[i]]);
    }
    currentSquareRows = rowArray;
    rowArray = [];
}
function getCurrentSquareColumns() {
    columnIndexNums = calcMod(currentSudokuBox.dataset.column);
    currentSquareColumns = [];
    let colArray = [];
    for (let iColumn = 0; iColumn < 3; iColumn++) {
        for (let i = 0; i < 9; i++) {
            colArray.push(updatedSudokuDefault[i][columnIndexNums[iColumn]])
        }
        currentSquareColumns.push(colArray);
        colArray = [];
    }
}
function getCurrentSquare() {

    //columnIndexNums.sort();
    let squareArray = [];
    for (let i = 0; i < 3; i++) {
        for (let iColumn = 0; iColumn < 3; iColumn++) {
            squareArray.push(currentSquareRows[i][columnIndexNums[iColumn]]);
        }
    }
    currentSquareNumbers = squareArray;
    squareArray = [];
}

function calcMod(num) {
    num = Number(num)
    let numberList = [num];

    if (num % 3 == 0) {
        numberList.push((num + 1));
        numberList.push((num + 2));
    }
    else if (num % 3 == 1) {
        numberList.push((num - 1));
        numberList.push((num + 1));
    }
    else if (num % 3 == 2) {
        numberList.push((num - 1));
        numberList.push((num - 2));
    }
    return numberList;
}

function doBruteForce() {
    controlPossibleKeys();
    controlPossibleKeysStepTwo();
    if (possibleNumbers.length == 1) {
        currentSudokuBox.value = possibleNumbers[0];
        currentSudokuBox.disabled = 'true';
        setTimeout(()=>{},3000);
    }
    controlProccess();
}

function controlPossibleKeys() {
    let keys = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    possibleNumbers = [];

    keys.forEach((num) => {
        if (!currentSquareNumbers.includes(num)) {
            if (!currentColumn.includes(num) && !currentRow.includes(num)) {
                possibleNumbers.push(num);
                currentSudokuBox.innerHTML = `<span style="color:green;">${num}</span>`;
            }
        }
    })
}
function controlPossibleKeysStepTwo() {

    possibleNumbers.forEach((num) => {
        if (currentSquareColumns[1].includes(num) && currentSquareColumns[2].includes(num)) {
            if (currentSquareRows[1].includes(num) && currentSquareRows[2].includes(num)) {
                possibleNumbers = [num];
            }
        }
    })
}

function controlProccess() {
    if(isFinish){
        return;
    }
    updatedSudokuDefault.forEach((item)=>{
        item.forEach((num)=>{
            if(typeof num === "string"){
                bruteForceMain();
                isFinish = false;
            }else{
                isFinish = true;
            }
        })

        
    })

}
