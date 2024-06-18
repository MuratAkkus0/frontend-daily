// Pagination Function
import { activeTracker } from "./active_tracker.js";

let toolbarItems = document.querySelectorAll('.menu-item');

toolbarItems.forEach(item => {
    item.addEventListener('click', activeTracker);
});  
// Active import function for all pages
const studyCardsUrl = "/Word_Repeat/pages/study-cards.html" ;
const addWordUrl = "/Word_Repeat/pages/new-word.html" ;
const turnCardMdlLoc = "./turn_card.js" ;
const addWordMdlLoc = "./add_word.js" ;

window.addEventListener('load', () => {
    switch (window.location.pathname) {
        case studyCardsUrl:
            import(turnCardMdlLoc).then( turnCardTrigger => turnCardTrigger.turnCardTrigger());
            break;
        case '/frontend-daily/Wort_Repeat/wort-pool.html':  
        break;  
        case addWordUrl:
            
            import(addWordMdlLoc).then(
                addWordMdl => addWordMdl.addEventListener()
            );
            break;
    }
});
export {toolbarItems};