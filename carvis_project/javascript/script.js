//selecting html elements
let startBtn = document.querySelector('#startBtn');
let stopBtn = document.querySelector('#stopBtn');
let speakBtn = document.querySelector('#speakBtn');
let textArea = document.querySelector('.text-area');
let OptionList = document.querySelector('#optionList');
let voices;
let selectedLang; //Default value is tr
let currentRecognition;
// Main Control Object 
let controlObject = {
    automaticlyStopped: false, // automaticly stopped by speech api
    hasToStop: false,
}
OptionList.addEventListener('change', getChange);
// Main Window Function that fires at the load time
window.addEventListener('load', loadFunction);
function loadFunction() {
    getVoice();
    speakOut();
    setTimeout(() => {
        speakOut('Hoşgeldiniz Efendim');
    }, 100)
    setInterval(() => {
        textArea.innerHTML = '';
    }, 30000);
}

// Voice to Text
function getVoice() {
    const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
    const grammar =
        `#JSGF V1.0; grammar worts; public <wort> = jarvis | carvis | merhaba | hey | cervis}`;
    const recognition = new SpeechRecognition();
    currentRecognition = recognition;
    const speechRecognitionList = new webkitSpeechGrammarList() || new SpeechGrammarList();
    speechRecognitionList.addFromString(grammar, 1);
    recognition.grammars = speechRecognitionList;
    recognition.lang = selectedLang || 'tr-TR';
    recognition.continuous = true;
    recognition.start();
    recognitionPhases(recognition);
}
// Recognition onStart/onresult...
function recognitionPhases(recognition) {
    //Adding EventListener to Buttons
    startBtn.addEventListener('click', () => { recognition.start() });
    stopBtn.addEventListener('click', () => { recognition.stop() });
    recognition.onstart = function () {
        console.log("VR Started")
    }
    recognition.onresult = function (event) {
        let lastSpeech = event.results[event.resultIndex][0].transcript;// getting last sentence
        textArea.innerHTML += `<p>+ ${lastSpeech}</p>`;
        speakOut(lastSpeech);
        // Calling Voice Control Commands Function
        recognitionStopControl(recognition, lastSpeech);
    }
    recognition.onend = function () {
        if (!controlObject.hasToStop) {
            controlObject.automaticlyStopped = true;
        } else {
            controlObject.automaticlyStopped = false;
        }
        controlFunction();
    }
    recognition.onaborted = function () {
        textArea.innerHTML = '';
        loadFunction();
    }
    recognition.onnomatch = function () {
        speakOut('maalesef anlamadım')
    }
    recognition.onerror = function (err) {
        textArea.innerHTML += `<p>${err}</p>`
        recognition.stop;
        recognition.start;
    }
}
// Voice Control Commands Function
function recognitionStopControl(recognition, lastSpeech) {
    lastSpeech = lastSpeech.toLowerCase();
    if (lastSpeech.indexOf('bekle') > -1) {
        controlObject.hasToStop = true;
        recognition.stop();
    }
}
// Text to Voice
let selectedVoiceIndex = 3;
function speakOut(msg) {
    const synth = window.speechSynthesis;
    const speechUtterance = new SpeechSynthesisUtterance();
    voices = [...synth.getVoices()];
    setLanguage(speechUtterance, voices);
    if (msg == undefined) return;
    speechUtterance.text = msg;
    speechUtterance.volume = 1;
    speechUtterance.pitch = 0.1;
    speechUtterance.rate = 1.3;
    textArea.innerHTML += `<p>- ${speechUtterance.text} (seslendirildi) </p>`;
    synth.speak(speechUtterance);
    speechUtterance.text = '';
}
// Create Language Option List
function setLanguage(speechUtterance, voices) {
    setOptionList(voices);
    if (voices.length != 0) {
        console.log(voices);
        console.log(selectedVoiceIndex);
        //console.log(selectedLang);
        let selectedVoice = voices[selectedVoiceIndex];
        selectedLang = selectedVoice.lang;
        speechUtterance.voice = selectedVoice;
        speechUtterance.lang = selectedVoice.lang;
    }
}
// OptionList Change Event 
function getChange(e) {
    try {
        selectedVoiceIndex = OptionList.selectedIndex;
        selectedLang = voices[selectedVoiceIndex].lang;
        textArea.innerHTML = '';
        loadFunction();
    } catch (error) {
        alert(error);
    }
    e.preventDefault;
    e.stopPropagation;
};
// Populate Option List
function setOptionList(voices) {
    // Select Option List From Html
    if (OptionList.options.length == 0) {
        console.log(OptionList)
        voices.forEach((item, index) => {
            if (index == 3) {
                OptionList.innerHTML += `<option data-lang="${item.lang}" id="${index}" selected>${item.name}</option>`;
            } else {
                OptionList.innerHTML += `<option data-lang="${item.lang}" id="${index}">${item.name}</option>`;
            }
        });
    }
}
// start - stop controller . 
//When i sad "stop" must stopping but automaticly must not stopping.
function controlFunction() {
    textArea.innerHTML = '';
    if (controlObject.automaticlyStopped) {
        console.log("VR Stoped")
        currentRecognition.start();
    }
};