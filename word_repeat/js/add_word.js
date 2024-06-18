// Selecting Elements From Dom
const add_new_word = document.querySelector("#add_new_word-btn");
const word = document.querySelector("#word");
const word_type = document.querySelector("#word_type");
const word_tr = document.querySelector("#word_tr");
const word_en = document.querySelector("#word_en");
const word_example = document.querySelector("#word_example");
const word_example_tr = document.querySelector("#word_example_tr");
const word_example_en = document.querySelector("#word_example_en");

// Setting Event Listener
function addEventListener(){
    add_new_word.addEventListener('click', addNewWord);
    console.log('event listener added');
}

// Adding New Word
function addNewWord(e) {
    console.log('event listener activated');
    e.preventDefault();
    const newWord = {
        id: createIdNumber(),
        word: word.value,
        word_type: word_type.value,
        word_tr: word_tr.value,
        word_en: word_en.value,
        word_example: word_example.value,
        word_example_tr: word_example_tr.value,
        word_example_en: word_example_en.value
    }
    if (word.value && word_type.value !== 'default' && word_tr.value) {
        setItemToLocalStorage(newWord);
    } else {
        alert('Lütfen Tüm Alanları Doldurunuz')
    }

    console.log (newWord);
}

//Create ID Number
function createIdNumber(){
    let words = getItemsFromLocalStorage();
    let id; 
    if (words.length === 0) {
        id = 0;
    } else {
        id = words.length;
        // Duplicate Index Number Control
        words.forEach(item => {
            if (item.id === id){
                return createIdNumber();
            }

           });
    }
    return id;
}

// Set Item To Local Storage
function setItemToLocalStorage(newWord) {
    let words = getItemsFromLocalStorage();
    words.push(newWord);
    localStorage.setItem('words',JSON.stringify(words));
    word.value = '';
    word_type.value = 'default';
    word_tr.value = '';
    word_en.value = '';
    word_example.value = '';
    word_example_tr.value = '';
    word_example_en.value = '';
}

// Get Items From Local Storage
function getItemsFromLocalStorage() {
    let words;
    if (localStorage.getItem('words') === null) {
        words = [];
    } else {
        words = JSON.parse(localStorage.getItem('words'));
    }
    return words;
}

// Delete a Word From Local Storage
function deleteWordFromLocalStorage(id) {
    let words = getItemsFromLocalStorage();
    words.forEach((word, index) => {
        if (word.id === id) {
            words.splice(index, 1);
        }
    });
    localStorage.setItem('words',JSON.stringify(words));
}

// Exporting
export { addEventListener , deleteWordFromLocalStorage };