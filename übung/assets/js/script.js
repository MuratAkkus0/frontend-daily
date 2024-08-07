import { startCountdown, countInterval, resetCountdown } from "./countdown.js";
import { getApiData, apiResult } from "./apiConnection.js";

const answerInput = document.querySelectorAll(".answer_input");
const answerBtn = document.querySelectorAll(".answer_btn");
const popup = document.querySelector(".game_popup");
const popupText = document.querySelector(".popup_text");
let countControl = false;
let prompt = `You are playing a game called Word Wars. You are tasked to respond as Tony Stark. Your response should be the chosen word. Do not use indicators like "Start" or "Speak" .The rules are as follows:
When "Speak" is said, introduce yourself in a cool way and challenge your opponent.
When "Start" is said, choose an English word and respond with that word only.
When "Start" is said, you can only respond with a single word.
Each letter in the word will receive points equal to its position in the alphabet (e.g., A = 1 point, Z = 26 points). `

// Event Listeners
const startBtn = document.querySelector(".start_btn").addEventListener("click", countControlFunc);
const stopBtn = document.querySelector(".stop_btn").addEventListener("click", countControlFunc);
const resetBtn = document.querySelector(".reset_btn").addEventListener("click", countControlFunc);

(async () => {
    await getApiData(prompt);
    if (apiResult.llm_output) {
        popupText.textContent = apiResult.llm_output;
        popup.style.display = "flex";
    }

    console.log(apiResult)
})()

// Getting Answer 
answerInput.forEach((input) => {
    input.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            apiOptions.body.text = input.value;
            // console.log(apiOptions.body.text)
            // getApiData();
        }
    })
})
// Count Control

function countControlFunc(e) {
    e.stopPropagation();
    if (e.target.classList.contains("start_btn") && !countControl) {
        countControl = true;
        startCountdown();
    }
    if (e.target.classList.contains("stop_btn") && countControl) {
        countControl = false;
        clearInterval(countInterval);
    }
    if (e.target.classList.contains("reset_btn")) {
        countControl = false;
        resetCountdown();
    }
}
// Count Control End

//             ******** Aufgabe ******** 
function Aufgabe() {
    let result = 0;
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let inputWord = "test";
    let inputWordArray = (inputWord.toLowerCase()).split("");

    inputWordArray.forEach((letter) => {
        result += (alphabet.indexOf(letter) + 1);
    })
}