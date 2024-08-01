// Pagination Function
import { activeTracker } from "./active_tracker.js";

let toolbarItems = document.querySelectorAll('.menu-item');
let mobileMenu = document.querySelector('.mobile-menu-icon');
let toolbarContainer = document.querySelector('.toolbar-container');
let menu = document.querySelector('.menu');

toolbarItems.forEach(item => {
    item.addEventListener('click', activeTracker);
});

mobileMenu.addEventListener('click', mobileMenuActive);

function mobileMenuActive(e) {
    menu.classList.toggle('active');
}

export { toolbarItems };