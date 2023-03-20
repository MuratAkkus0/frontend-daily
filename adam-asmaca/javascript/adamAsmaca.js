// Select Element Varaibles

const container = document.querySelector('.container');
const manLines = document.querySelectorAll('.man');
const manBody = document.querySelector('.man-body');
const rightArm = document.querySelector('.right-arm');
const leftArm = document.querySelector('.left-arm');
const rightFoot = document.querySelector('.right-foot');
const leftFoot = document.querySelector('.left-foot');
const guessArea = document.querySelector('.word');
const wrongArea = document.querySelector('.wrong-box');
const popupContainer = document.querySelector('.popup-container');
const popupText = document.querySelector('.popup-text');
const popupButton = document.querySelector('#popup-button');
const attentionBox = document.querySelector('.attention');
const attentionText = document.querySelector('.attention-text');
const infoText = document.querySelector('.info-text');
const showCountNum = document.querySelector('.count-num');
const inputArea = document.querySelector('.input-container');
const formArea = document.querySelector('.form');
const openİnput = document.querySelector('.open-input-box');
const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');
const infoInput = document.querySelector('#manInfo');
const addButton = document.querySelector('#addPerson');
const delButton = document.querySelector('#delAllPerson');
const addInf = document.querySelector('.added-text');
const mobilInput = document.querySelector('#mobile-input');


// Select Word

let words;
let getLsWord;
let randomNum;
let selectedWord;
let wrongLetterArr = [];
let pushedKey = [];
let activedLetters = [];
let mainCount = 10;
let tryCount = 0;
let letterCount = 0;
let thiefImg;
let wordLS = [];
let newPerson;
let newText;
let contAnswer = true;
let controlVar;
let translatedId;

loadLS();
getWordLS();
setWordLS();
selectWordFunc();
setWord();
setİnfo();
showCount();

// Event Listeners
popupButton.addEventListener('click', popupBut);
window.addEventListener('keyup', catchKey);
window.addEventListener('touchstart', catchKeyMobil);
//mobilInput.addEventListener('keyup', catchKey);
window.addEventListener('click', closeArea);
inputArea.addEventListener('click', inInput);
nameInput.addEventListener('keyup',enterFunc)
surnameInput.addEventListener('keyup',enterFunc)
delButton.addEventListener('click', delWordsLS);
addButton.addEventListener('click', addPerson);
openİnput.addEventListener('click', openArea)


// Default Words
function defaultWords(word, idWord, infoWord) {
    newPerson = {
        word: `${word}`,
        id: `${idWord}`,
        info: `* ${infoWord}`
    }
    words.push(newPerson);
}

// Load Local Storage
function loadLS() {
    if (words === undefined && localStorage.getItem('words') === null) {
        words = [];
        setWordLS();
    }
}

// Set Word To Ls
function setWordLS() {
    words.forEach((item) => {
        if (item.id == 'rte') {
            contAnswer = false
        }
        if (item.id == 'kinik') {
            contAnswer = false
        }
        if (item.id == 'sülü') {
            contAnswer = false
        }
    })
    if (contAnswer) {
        defaultWords('receptayyiperdoğan', 'rte',
            'Bir Ülke 20 Senede Nasıl Batırılır Hakkında Tez Yazan Adam, Pardon Adam Demişiz');
        defaultWords('keremkınık', 'kinik', 'Kızılayı Aile Şirketi Gibi Kullanıp Depremde Çadır Satan Sözde Kızılay Başkanı')
        defaultWords('süleymansoylu', 'sülü', 'Mafya Babası Ve Uyuuşturucu Baronu Olan Sözde Bakan Ama Aslında Hiç Bakmayan Varlık')
    }
    contAnswer = true;
    localStorage.setItem('words', JSON.stringify(words));
}

// Get Words From LS
function getWordLS() {
    getLsWord = JSON.parse(localStorage.getItem('words'));
    words = getLsWord;
    setWordLS();
}

// Delete Words From Ls

function delWordsLS(event) {
    event.stopPropagation();
    addEventListener('keyup',catchKey)
    inputFunc();
    getWordLS();
    words = [];
    words.forEach((item) => {
        if (item.id == 'rte') {
            contAnswer = false
        }
        if (item.id == 'kinik') {
            contAnswer = false
        }
        if (item.id == 'sülü') {
            contAnswer = false
        }
    })
    if (contAnswer) {
        defaultWords('receptayyiperdoğan', 'rte',
            'Bir Ülke 20 Senede Nasıl Batırılır Hakkında Tez Yazan Adam, Pardon Adam Demişiz');
        defaultWords('keremkınık', 'kinik', 'Kızılayı Aile Şirketi Gibi Kullanıp Depremde Çadır Satan Sözde Kızılay Başkanı')
        defaultWords('süleymansoylu', 'sülü', 'Mafya Babası Ve Uyuuşturucu Baronu Olan Sözde Bakan Ama Aslında Hiç Bakmayan Varlık')
    }
    contAnswer = true;
    setWordLS();
}

// Submit Form With Enter
function enterFunc(event){
    event.stopPropagation();
    if (event.keyCode == 13){
        addPerson();
        console.log('enter active')
    }
}

// Show Form Area

function openArea() {
    inputArea.classList.toggle('open');
    formArea.classList.toggle('opn-form');
    setTimeout(displayFun, 300)

    function displayFun() {
        formArea.classList.toggle('display-form')
    }
}
function closeArea(event){
    event.stopPropagation();
    addEventListener('keyup',catchKey);
    inputFunc();
    if (inputArea.className.includes('open')) {
        inputArea.classList.toggle('open');
        formArea.classList.toggle('opn-form');
        setTimeout(displayFun, 300)
    }
    function displayFun() {
        formArea.classList.toggle('display-form')
    }
}
// Take Word From User

function addPerson(event) {
    event.stopPropagation();
    addEventListener('keyup', catchKey);
    inputFunc();
    getWordLS();
    transformLet(surnameInput.value);
    translatedId = newText;
    nameInput.value = nameInput.value.toLowerCase();
    surnameInput.value = surnameInput.value.toLowerCase();

    newPerson = {
        word: `${nameInput.value}${surnameInput.value}`,
        id: `${translatedId}`,
        info: `* ${infoInput.value}`
    }
    controlVar = words.forEach((item) => {
        if (item.id == newPerson.id) {
            contAnswer = false
        }
    })
    if (contAnswer) {
        words.push(newPerson);
    }
    setWordLS();
    wordAdded();

    function wordAdded() {

        addInf.style.opacity = '1';
        addInf.style.transform = 'translateY(-50%)'
        setTimeout(closeInf, 2000);

        function closeInf() {
            addInf.style.transform = 'translateY(-100%)'
            addInf.style.opacity = '0';
        }
    }

    nameInput.value = '';
    surnameInput.value = '';
    infoInput.value = '';

}

// Transform Letter
function transformLet(word) {
    newText = word.toLowerCase();
    let getLetters = newText.split('');
    getLetters.forEach((item) => {
        if (item == ' ') {
            item = '';
        }
        if (item == '.') {
            item = '';
        }
        if (item == ',') {
            item = '';
        }
        if (item == ';') {
            item = '';
        }
        if (item == ':') {
            item = '';
        }
        if (item == '?') {
            item = '';
        }
        if (item == '!') {
            item = '';
        }
        if (item == 'ğ') {
            item = 'g';
        }
        if (item == 'ü') {
            item = 'u';
        }
        if (item == 'ı') {
            item = 'i';
        }
        if (item == 'ş') {
            item = 's';
        }
        if (item == 'ç') {
            item = 'c';
        }
        if (item == 'ö') {
            item = 'o';
        }
        if (newText == word.toLowerCase()) {
            newText = item;
        } else {
            newText += item;
        }
    })
    return newText;
}


// Select Word
function selectWordFunc() {
    getWordLS();
    randomNum = Math.round(Math.random() * (words.length - 1));
    selectedWord = words[randomNum];
    controlWord();
    setWordLS();
}

// Control Same Word
function controlWord() {
    if (!localStorage.getItem('word')) {
        localStorage.setItem('word', JSON.stringify(selectedWord.id));
    }
    let fromLocal = JSON.parse(localStorage.getItem('word'));
    wordLS.push(fromLocal);

    if (wordLS == selectedWord.id) {
        wordLS = [];
        selectWordFunc();
        localStorage.setItem('word', JSON.stringify(wordLS));
        return;
    } else {
        wordLS = [];
        wordLS.push(selectedWord.id);
        localStorage.setItem('word', JSON.stringify(wordLS))
    }
}

// Show Main Count
function showCount() {
    showCountNum.innerText = `${mainCount}`
}

// Add Word İn Html

function setWord() {
    selectedWord.word.split('').forEach((letter) => {
        guessArea.innerHTML += ` <div class="letter"><span>${letter}</span></div> `;
    })
}

// Add İnfo İn Html
function setİnfo() {
    infoText.innerText = `${selectedWord.info}`;
}

function inInput(event) {
    removeEventListener('keyup', catchKey)
    event.stopPropagation();
}

// Main Proccess Function
function catchKey(event) {
    console.log(event.key)
    console.log(event.keyCode)
    switch (true) {
        case event.keyCode == 222:
        case event.keyCode == 221:
        case event.keyCode == 219:
        case event.keyCode == 191:
        case event.keyCode == 186:
            mainFun();
            break;
    }
    if (event.keyCode <= 90 && event.keyCode >= 65) {
        mainFun()
    }

    function mainFun() {
        const selectWordLetter = document.querySelectorAll('.letter');
        let selectedWordLetters = [];

        if (pushedKey.includes(event.key)) {
            letterAlreadyUsed();
            return;
        }


        selectWordLetter.forEach((item) => {
            selectedWordLetters.push(item.children[0].textContent);
        })

        selectWordLetter.forEach((item) => {
            if (event.key == item.children[0].textContent) {
                item.children[0].textContent = item.children[0].textContent.toUpperCase();
                item.children[0].style.display = 'inline-block';
                letterCount++;
                if (!activedLetters.includes(item.children[0].textContent)) {
                    activedLetters.push(item.children[0].textContent);
                    tryCount++;
                }
            }
        })

        if (!selectedWordLetters.includes(event.key)) {
            if (!wrongLetterArr.includes(event.key)) {
                mainCount--;
                wrongLetterArr.push(event.key);
                wrongArea.innerHTML += ` <div class="wrong-letter">${event.key},</div> `
            }
        }
    }

    pushedKey.push(event.key);
    showCount();
    showMan();
    youWon();
    return;
}

// Give Attention
function letterAlreadyUsed() {
    attentionText.innerText = '* Bu Harf Daha Önce Zaten Kullanıldı !';
    attentionBox.style.opacity = '1';
    attentionBox.style.transform = 'translateX(-50%)'
    setTimeout(closeAttent, 2000);
}

function closeAttent() {
    attentionBox.style.transform = 'translateX(-50%) translateY(-100%)'
    attentionBox.style.opacity = '0';
}

// Won Function
function popupBut() {
    window.location.reload();
    return;
}

function showPop() {
    popupContainer.style.opacity = '1';
    popupContainer.style.zIndex = '7';
    popupButton.style.display = 'inline-flex';
}

function hidePop() {
    popupContainer.style.opacity = '0';
    popupContainer.style.zIndex = '-7';
    popupButton.style.display = 'none';
}

function youWon() {
    if (tryCount == 6) {
        showPop();
        popupText.innerText = 'Tebrikler ! Kazandınız !'
        popupButton.style.display = 'inline-flex';
        return;
    }
    if (mainCount == 0) {
        popupText.innerText = 'Oyun Bitti, Kaybettiniz !'
        showPop();
        return;
    }
}

// Choose Man İmg
function chooseThief(thiefId) {
    thiefImg = document.querySelector(`#${thiefId}`);
    if (thiefImg === null) {
        thiefImg = document.querySelector('.man-head');
    }
    return thiefImg;
}

// When İnput Letter is Wrong Show Man
function showMan() {
    if (tryCount == 1) {
        chooseThief(selectedWord.id);
        thiefImg.style.display = 'inline'
    }
    if (tryCount == 2) {
        manBody.style.display = 'inline'
    }
    if (tryCount == 3) {
        rightArm.style.display = 'inline'
    }
    if (tryCount == 4) {
        leftArm.style.display = 'inline'
    }
    if (tryCount == 5) {
        rightFoot.style.display = 'inline'
    }
    if (tryCount == 6) {
        leftFoot.style.display = 'inline'
    }
    if (tryCount == 6) {
        const selectWordLetter2 = document.querySelectorAll('.letter');
        selectWordLetter2.forEach((item) => {
            item.children[0].textContent = item.children[0].textContent.toUpperCase();
            item.children[0].style.display = 'inline-block';
        })

        setTimeout(breakManLine, 700)
        window.removeEventListener('keyup', catchKey);

    }
}

// Endlich Man Dead And Line İs Broked
function breakManLine() {
    manLines.forEach((item) => {
        item.classList += ' procces-done'
    })
    thiefImg.className += 'procces-done';
    thiefImg.style.zIndex = '10';
}
function inputFunc(){
       mobilInput.focus();
}
function catchKeyMobil(){
     var touch = event.touches[0];
     var selectedChar = touch.target.textContent;
     mainFun();

    function mainFun() {
        const selectWordLetter = document.querySelectorAll('.letter');
        let selectedWordLetters = [];

        if (pushedKey.includes(selectedChar)) {
            letterAlreadyUsed();
            return;
        }


        selectWordLetter.forEach((item) => {
            selectedWordLetters.push(item.children[0].textContent);
        })

        selectWordLetter.forEach((item) => {
            if (selectedChar == item.children[0].textContent) {
                item.children[0].textContent = item.children[0].textContent.toUpperCase();
                item.children[0].style.display = 'inline-block';
                letterCount++;
                if (!activedLetters.includes(item.children[0].textContent)) {
                    activedLetters.push(item.children[0].textContent);
                    tryCount++;
                }
            }
        })

        if (!selectedWordLetters.includes(selectedChar)) {
            if (!wrongLetterArr.includes(selectedChar)) {
                mainCount--;
                wrongLetterArr.push(selectedChar);
                wrongArea.innerHTML += ` <div class="wrong-letter">${selectedChar},</div> `
            }
        }
    }

    pushedKey.push(selectedChar);
    showCount();
    showMan();
    youWon();
    return;
}
    
