import { startCountdown, countInterval, resetCountdown } from "./countdown.js";
import { getApiData, apiResult, llmActive } from "./apiConnection.js";

const answerInput = document.querySelectorAll(".answer_input");
const answerBtn = document.querySelectorAll(".answer_btn");
const startBtn = document.querySelector(".start_btn");
const stopBtn = document.querySelector(".stop_btn");
const popup = document.querySelector(".game_popup");
const popupText = document.querySelector(".popup_text");
const points = document.querySelectorAll(".score");
let countControl = false;
let prompt = `You are playing a game called Word Wars. You are tasked to respond as Tony Stark. Your response should be the chosen word. Do not use indicators like "Start" or "Speak" .The rules are as follows:
When "Speak" is said, introduce yourself in a cool way and challenge your opponent.
When "Start" is said, choose an English word and respond with that word only.
When "Start" is said, you can only respond with a single word.
Each letter in the word will receive points equal to its position in the alphabet (e.g., A = 1 point, Z = 26 points). `

// Event Listeners
startBtn.addEventListener("click", countControlFunc);
stopBtn.addEventListener("click", countControlFunc);
const resetBtn = document.querySelector(".reset_btn").addEventListener("click", countControlFunc);
const popupBtn = document.querySelector(".popup_btn").addEventListener("click", closePopup);
answerBtn.forEach((btn) => { btn.addEventListener("click", GetAnswer); })
answerInput.forEach((input) => { input.addEventListener("keyup", GetAnswer); });
answerInput.forEach((input) => { input.addEventListener("focus", (e) => {let event = new Event('click'); startBtn.dispatchEvent(event); }); });


(async () => {
    await getApiData(prompt);
    popupText.textContent = apiResult.llm_output;
    popup.style.display = "flex";
    console.log(apiResult)
})()

// Popup Control
function closePopup() {
    popup.style.display = "none";
    answerInput.forEach((input) => { if (input.dataset.id != 'tony') {input.disabled=false;} });
}
// Getting Answer 
function GetAnswer(e) {
    //Event Type Kontrol
    if ((e.type == "keyup" && e.key === "Enter") || e.type == "click" ) {
        if (llmActive) {
            let event = new Event('click');
            stopBtn.dispatchEvent(event);
        }
        let scoreArea = e.target.closest(".player_box").children[1].children[0].children[0];
        let input = e.target.parentElement.children[0];
        scoreArea.textContent = Number(scoreArea.textContent) + Aufgabe(input.value);
        getApiData(input.value);
        input.value = "";
    }
}


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
        points.forEach((point) => { point.textContent = 0; });
        answerInput.forEach((input) => { input.value = ""; });
    }
}
// Count Control End

//                                      ******** Aufgabe ******** 
function Aufgabe(text) {
    let result = 0;
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let inputWordArray = (text.toLowerCase()).split("");
    inputWordArray.forEach((letter) => {
        result += (alphabet.indexOf(letter) + 1);
    })
    return result;
}