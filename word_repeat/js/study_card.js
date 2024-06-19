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
    let config = JSON.parse(sessionStorage.getItem('config'));
    let words = getItemsFromLocalStorage();
    words = filterCategory(config.category,words)
    createRandomNumber(words)
    let randomWord = words[randomIndex];
    card_front_face.innerHTML = randomWord.word;
    card_back_face.innerHTML = randomWord.word_tr;
}

function filterCategory(category,words){
    let filteredWords = [];
    if (category === null) {return filteredWords}
    for (let i = 0; i < words.length; i++){
        if (words[i].word_type === category) {
            filteredWords.push(words[i]);
        }
    }
    return filteredWords;
}

// Create Random Index Number
function createRandomNumber(words) {
    let usedNumbers;
    let prevIndex = randomIndex;
    randomIndex = Math.floor(Math.random() * words.length);
    // All Cards are used
    if (sessionStorage.getItem('usedNumbers') === null) {
        usedNumbers = [];
    } else {
        usedNumbers = JSON.parse(sessionStorage.getItem('usedNumbers'));
    }
    // Duplicate Index Number Control
    if  (usedNumbers.includes(randomIndex)) {
        if (usedNumbers.length === words.length)    {
            sessionStorage.removeItem('usedNumbers'); 
            if (prevIndex !== null) {
                sessionStorage.setItem('usedNumbers', JSON.stringify([prevIndex]));
            }
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
            initializeCard();
        },200)
    }else{
        initializeCard();
    }
    

}   

function getPrevCard(e) {    
    console.log('prev card')    
}

