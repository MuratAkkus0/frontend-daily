// Variable Defination
let configObject;
// selecting the element
const word_ctgs = document.querySelectorAll(".word-ctg");

// adding event listener
word_ctgs.forEach((word_ctg) => {
    word_ctg.addEventListener("click", getWords);
});

function getWords(e) {
    let category = e.target.parentElement.dataset.id;
    console.log(category);

    configObject = {
        category : category,
    }

    setConfigLocalStorage(configObject);
    window.location.href = `/pages/study-cards.html`
}

// setting config to local storage
function setConfigLocalStorage(category) {
    sessionStorage.setItem("config", JSON.stringify(category));
}