// Variables For Select İtems
const numberButtons = document.querySelectorAll('.numbers');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');
const textOutput = document.querySelector('.text-area');
const dote = document.querySelector('.dote');

let displayNumber = '0';
let firstNumber = null;
let isWaiting = false;
let operator = null;


// Event Listeners
updateDisplay();
eventListeners();
function eventListeners() {

    numberButtons.forEach((item)=>{
        item.addEventListener('click',getNumber);
    })
    operatorButtons.forEach((item)=>{
        item.addEventListener('click',getOperator)
    })
    equalButton.addEventListener('click',getEqual);
    clearButton.addEventListener('click',getClear);
    dote.addEventListener('click',getDote);
}



// Update Display Number
function updateDisplay(){
    textOutput.value = displayNumber;
}

// Get Numbers
function getNumber(event) {
    let number = event.target.value;
    if (isWaiting === true){
        displayNumber = number
        updateDisplay();
        isWaiting = false;
        return;
    }else{
        displayNumber === '0'? displayNumber=number : displayNumber+=number;
        updateDisplay();
    }
}

function getDote(event) {
    addDote = event.target.value;
    if (!displayNumber.includes('.')){
        if (isWaiting === false) {
            displayNumber += addDote;
            updateDisplay();
        }else {
            displayNumber = '0';
            displayNumber += addDote;
            updateDisplay();
            isWaiting = false;
        }
    }
}

function getOperator(event){
    function updateOperator(event){
        operator = event.target.value;
    }
    if (isWaiting === true){
        updateOperator(event);
        displayNumber = firstNumber;
        updateDisplay();
        isWaiting = false;
        return;
    }
    if (firstNumber === null){
        updateOperator(event);
        firstNumber = displayNumber;
        isWaiting = true;
        return;
    }else {
        displayNumber = calcControl(firstNumber,displayNumber,operator);
        updateOperator(event);
        firstNumber = displayNumber;
        updateDisplay();
        isWaiting = true;
        return;
    }
}




function getClear(){
    displayNumber='0';
    firstNumber = null;
    updateDisplay();
}
function getEqual(){
    displayNumber = calcControl(firstNumber,displayNumber,operator);
    firstNumber = null;
    updateDisplay();
}

function calc(first,second,operator){
    first = parseFloat(first);
    second = parseFloat(second);
    if (operator==='+'){
        return first + second;
    }
    if (operator==='-'){
        return first - second;
    }
    if (operator==='*'){
        return first * second;
    }
    if (operator==='/'){
        return first / second;
    }
}
function calcControl(first,second,operator) {
    let result = calc(first,second,operator);
    if (result.toString().length >= 7){
        console.log('in')
        return result.toFixed(7)
    }else{
        return result;
    }
}