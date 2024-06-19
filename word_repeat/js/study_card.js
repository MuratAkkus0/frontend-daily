// importing the module
import { getItemsFromLocalStorage } from "./localStorage_Proccesses.js";
import { turnCard, isFirstClick } from "./turn_card.js";

// selecting the element
const card_front_face = document.querySelector("div.card-face.front");
const card_back_face = document.querySelector("div.card-face.back");
const card_turn_btn = document.querySelector(".turn-btn");
const card_prev_btn = document.querySelector(".btn-left");
const card_next_btn = document.querySelector(".btn-right");
// variable defination
let category = JSON.parse(sessionStorage.getItem('config'));
let randomIndex;

addEventListener();
initializeCard();

// adding event listener
function addEventListener() {
    card_next_btn.addEventListener('click', getNextCard);
    card_prev_btn.addEventListener('click', getPrevCard);
    card_turn_btn.addEventListener('click', turnCard);
}

// Initializing Card
function initializeCard() {
    let words = getItemsFromLocalStorage();
    createRandomNumber(words)
    let randomWord = words[randomIndex];
    card_front_face.innerHTML = randomWord.word;
    card_back_face.innerHTML = randomWord.word_tr;
}

// Create Random Index Number
function createRandomNumber(words) {
    let usedNumbers;
    randomIndex = Math.floor(Math.random() * words.length);
    if (sessionStorage.getItem('usedNumbers') === null) {
        usedNumbers = [];
    } else {
        usedNumbers = JSON.parse(sessionStorage.getItem('usedNumbers'));
    }
    if  (usedNumbers.includes(randomIndex)) {
        if (usedNumbers.length === words.length)    {
            sessionStorage.clear();   
        }
        createRandomNumber(words);
    }else{
        randomIndex = randomIndex;
        usedNumbers.push(randomIndex);
        sessionStorage.setItem('usedNumbers', JSON.stringify(usedNumbers));
    }
}

function getNextCard(e) {
    if (!isFirstClick) {
        turnCard()
        setTimeout(() => {
            console.log('waiting for turn card')
            initializeCard();
        },200)
    }else{
        initializeCard();
    }
    

}   

function getPrevCard(e) {    
    console.log('prev card')    
}

