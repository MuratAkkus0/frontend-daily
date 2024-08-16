// importing the module
import { getItemsFromLocalStorage } from "./localStorage_Proccesses.js";
import { turnCard, isFirstClick } from "./turn_card.js";

// selecting the element
const card_front_face = document.querySelector("div.card-face.front");
const card_back_face = document.querySelector("div.card-face.back");
const card_example_tr = document.querySelector(".example_tr");
const card_example_de = document.querySelector(".example_de");
const card_example_en = document.querySelector(".example_en");
const card_turn_btn = document.querySelector(".turn-btn");
const card_prev_btn = document.querySelector(".btn-left");
const card_next_btn = document.querySelector(".btn-right");
const card_mix_btn = document.querySelector(".mix-cards");
// variable defination
let words;
let randomIndex;
let prevCount = 1;
let cardIndex = 1;
let isMixing = true;

addEventListener();

// clearing the session and local storage
sessionStorage.removeItem('usedNumbers');
sessionStorage.removeItem('prevIndex');


// adding event listener
function addEventListener() {
    window.addEventListener('load', initializeCard);
    card_next_btn.addEventListener('click', getNextCard);
    card_prev_btn.addEventListener('click', getPrevCard);
    card_turn_btn.addEventListener('click', turnCard);
    card_mix_btn.addEventListener('click', mixCards);
    mixCards();
}


// Initializing Card
function initializeCard() {

    let config = JSON.parse(sessionStorage.getItem('config'));
    words = getItemsFromLocalStorage();
    if (words.length !== 0) {
        words = filterCategory(config.category, words)
        createRandomNumber(words)
        let randomWord = words[randomIndex];
        card_front_face.innerHTML = randomWord.word;
        card_back_face.innerHTML = 'TR: ' + randomWord.word_tr + '<br/>' + 'EN: ' + randomWord.word_en;
        card_example_tr.innerHTML = 'TR: ' + randomWord.word_example_tr;
        card_example_de.innerHTML = 'DE: ' + randomWord.word_example;
        card_example_en.innerHTML = 'EN: ' + randomWord.word_example_en;
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
    if (words.length === 1 || words.length === 0) { randomIndex = 0; return }
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
        if (usedNumbers.includes(newIndex)) {//Silindi|| newIndex === randomIndex
            console.log(cardIndex)
            if (usedNumbers.length >= words.length) {
                sessionStorage.removeItem('usedNumbers');
            }
            return createRandomNumber(words);
        } else {
            prevIndex = randomIndex;
            randomIndex = newIndex;
            usedNumbers.push(randomIndex);
            sessionStorage.setItem('usedNumbers', JSON.stringify(usedNumbers));
            sessionStorage.setItem('prevIndex', JSON.stringify([prevIndex]))
        }
    }
}
// Mixing Cards
function mixCards(e) {
    card_mix_btn.classList.toggle('active');
    if (card_mix_btn.classList.contains('active')) {
        isMixing = true;

    } else {
        isMixing = false;
    }
}

// Getting Next Card
function getNextCard(e) {

    // cardIndex = 1 Default Value
    prevCount = 1;
    let usedNumbers = JSON.parse(sessionStorage.getItem('usedNumbers'));
    console.log(words);
    if (cardIndex >= words.length && usedNumbers.length >= words.length) {
        cardIndex = words.length - 1;
        alert('Son Karttasiniz');
        return;
    }

    //  Card Turninng Control
    if (!isFirstClick) {
        turnCard()
        setTimeout(() => {
            initializeCard();
        }, 200)
    } else {
        initializeCard();
    }

    cardIndex++;
    console.log(cardIndex)

}

// Getting Previous Card
function getPrevCard(e) {
    if (cardIndex <= 0) {
        cardIndex = 0;
        alert('Ilk Karttasiniz');
        return;
    }

    // Getting previous random number from usedNumbers session storage
    // here getting wir previous random nummer using als index of usedNumbers - prevCount
    let usedNumbers = JSON.parse(sessionStorage.getItem('usedNumbers'));
    if (usedNumbers === null) { return }
    if (prevCount >= usedNumbers.length) { prevCount = 2 }
    else { prevCount++ };
    let prevIndex = usedNumbers[usedNumbers.length - prevCount];
    let prevWord = words[prevIndex];
    // Here we are removing previous index from usedNumbers and adding it again to end of usedNumbers, so we can always get previous of previous number.
    if (usedNumbers.length > 1) {
        usedNumbers.splice(usedNumbers.length - prevCount, 1);
        usedNumbers.push(prevIndex);
        sessionStorage.setItem('usedNumbers', JSON.stringify(usedNumbers));
    }
    // Here initializing we're Cards again
    if (typeof (prevIndex) === 'number') {
        card_front_face.innerHTML = prevWord.word;
        card_back_face.innerHTML = prevWord.word_tr;
    } else { return };
    cardIndex--;
    console.log(cardIndex)

}

