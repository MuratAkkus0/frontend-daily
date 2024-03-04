// Selecting Html Elements
let cards = document.querySelector('.cards');

// Listening events 
cards.addEventListener('click', getCard);

// 
function getCard(e) {
    let currentCard = e.target.closest('.card');
    let cardList = document.querySelectorAll('.card');
    if(e.target.hasAttribute('src')){
        cardList.forEach((item) => {
            if (item.classList.contains('active')) {
                item.classList.remove('active');
            }
        })
        currentCard.classList.toggle('active');
    }
}


