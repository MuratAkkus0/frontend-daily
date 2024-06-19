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
let words;
let randomIndex;
let prevCount = 1;

addEventListener();
initializeCard();

// adding event listener
function addEventListener() {
    card_next_btn.addEventListener('click', getNextCard);
    card_prev_btn.addEventListener('click', getPrevCard);
    card_turn_btn.addEventListener('click', turnCard);
}
// clearing the session and local storage
sessionStorage.removeItem('usedNumbers');
sessionStorage.removeItem('prevIndex');

// Initializing Card
function initializeCard() {
    let config = JSON.parse(sessionStorage.getItem('config'));
    words = getItemsFromLocalStorage();
    if (words.length !== 0) {
        words = filterCategory(config.category, words)
        createRandomNumber(words)
        let randomWord = words[randomIndex];
        card_front_face.innerHTML = randomWord.word;
        card_back_face.innerHTML = randomWord.word_tr;
    }
}

function filterCategory(category, words) {
    let filteredWords = [];
    if (category === null) { return filteredWords }
    else if (category === 'mix') { return words }
    for (let i = 0; i < words.length; i++) {
        if (words[i].word_type === category) {
            filteredWords.push(words[i]);
        }
    }
    return filteredWords;
}

// Create Random Index Number
function createRandomNumber(words) {
    let usedNumbers;
    let newIndex;
    let prevIndex = JSON.parse(sessionStorage.getItem('prevIndex'));
    // Initialize Random Index Number
    if (words.length === 1 || words.length === 0) { randomIndex = 0; return}
    else { newIndex = Math.floor(Math.random() * words.length) };

    // Session Storage Control
    if (sessionStorage.getItem('usedNumbers') === null) {
        usedNumbers = [];
    } else {
        usedNumbers = JSON.parse(sessionStorage.getItem('usedNumbers'));
    }
    checkDuplicate();

    // Duplicate Index Number Control
    function checkDuplicate() {
        if (usedNumbers.includes(newIndex) || newIndex === randomIndex) {
            if (usedNumbers.length === words.length) {
                sessionStorage.removeItem('usedNumbers');
            }
            return createRandomNumber(words);
        } else {
            prevIndex = randomIndex;
            randomIndex = newIndex;
            usedNumbers.push(randomIndex);
            console.log(usedNumbers);
            sessionStorage.setItem('usedNumbers', JSON.stringify(usedNumbers));
            sessionStorage.setItem('prevIndex', JSON.stringify([prevIndex]))
        }

    }



}

function getNextCard(e) {
    prevCount = 1;
    if (!isFirstClick) {
        turnCard()
        setTimeout(() => {
            initializeCard();
        }, 200)
    } else {
        initializeCard();
    }


}

function getPrevCard(e) {
    let usedNumbers = JSON.parse(sessionStorage.getItem('usedNumbers'));
    if (usedNumbers === null) { return }
    if (prevCount >= usedNumbers.length) { prevCount = 2 }
    else { prevCount++ };
    let prevIndex = usedNumbers[usedNumbers.length - prevCount];
    let prevWord = words[prevIndex];



    if (usedNumbers.length > 1) {
        usedNumbers.splice(usedNumbers.length - prevCount, 1);
        usedNumbers.push(prevIndex);
        console.log(usedNumbers);
        sessionStorage.setItem('usedNumbers', JSON.stringify(usedNumbers));
    }
    if (typeof (prevIndex) === 'number') {
        card_front_face.innerHTML = prevWord.word;
        card_back_face.innerHTML = prevWord.word_tr;
    } else { return };
}

