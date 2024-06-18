// Import Module
import { addNewWord } from "./localStorage_Proccesses.js"; 

// Selecting Elements From Dom
const add_new_word = document.querySelector("#add_new_word-btn");
const word = document.querySelector("#word");
const word_type = document.querySelector("#word_type");
const word_tr = document.querySelector("#word_tr");
const word_en = document.querySelector("#word_en");
const word_example = document.querySelector("#word_example");
const word_example_tr = document.querySelector("#word_example_tr");
const word_example_en = document.querySelector("#word_example_en");

addEventListener();
// Setting Event Listener

function addEventListener(){
    add_new_word.addEventListener('click', addNewWord);
    console.log('event listener added');
}

