// Variable Defination
let card = document.querySelector('.card');
let isFirstClick = true;

// Turning Card Function
let turnCard = (e) => {
    if (isFirstClick) {
        card.style.transform = 'rotateY(180deg)'
        isFirstClick = false
    } else {
        card.style.transform = 'rotateY(0deg)'
        isFirstClick = true;
    }
};

let currentCard = document.querySelector('.card');
let nextCard = document.querySelector('.next-card');
let nextBtn = document.querySelector('.btn-right');

// nextBtn.addEventListener('click', getNextCard);

function getNextCard(e) {
    console.log('next card')
    nextCard.style.transition = 'all 1s ease-in-out';
    nextCard.classList.remove('next-card');
    nextCard.classList.add('get-next-card');
    setTimeout(() => currentCard.style.display = 'none', 2000);
};



export { turnCard };