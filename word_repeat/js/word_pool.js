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
    window.location.href = `/Word_Repeat/pages/study-cards.html`
}

// Exporting
export { configObject }