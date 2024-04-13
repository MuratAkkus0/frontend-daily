let startBtn = document.querySelector('#startBtn');
let stopBtn = document.querySelector('#stopBtn');
let speakBtn = document.querySelector('#speakBtn');

const worts = [
    'Carvis',

]


// Voice to Text
const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;

const grammar =
    `#JSGF V1.0; grammar worts; public <wort> = carvis | hey carvis | }`;
const recognition = new SpeechRecognition();
const speechRecognitionList = new webkitSpeechGrammarList() || new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

console.log(speechRecognitionList)
console.log(recognition.grammars)
recognition.continuous = true;

recognition.onstart = function () {
    console.log("VR Started")
}
recognition.onresult = function (event) {
    let lastSpeech = event.results[event.resultIndex][0].transcript;
    console.log(lastSpeech);
    speakOut(lastSpeech);

    recognitionStopControl(lastSpeech);
}
recognition.onend = function () {
    console.log("VR Stoped")
}
recognition.onerror = function (err) {
    console.log(err)
}

function recognitionStopControl(lastSpeech) {
    lastSpeech = lastSpeech.toLowerCase();
    if (lastSpeech.indexOf('carvis bekle') > -1) {
        recognition.stop();
    }
}


startBtn.addEventListener('click', () => { recognition.start() });
stopBtn.addEventListener('click', () => { recognition.stop() });
speakBtn.addEventListener('click', () => { speakOut() });

// Text to Voice
function speakOut(msg) {
    const synth = window.speechSynthesis;
    let voices = [...synth.getVoices()];
    console.log(speechSynthesis.getVoices())
    const speechUtterance = new SpeechSynthesisUtterance();
    speechUtterance.text = msg;
    speechUtterance.volume = 1;
    speechUtterance.voice = voices[3];
    speechUtterance.lang = 'tr-TR'
    speechUtterance.pitch = 0;
    speechUtterance.rate = 1.3;
    synth.speak(speechUtterance)
    return;
}



