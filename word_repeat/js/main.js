// Pagination Function
import { activeTracker } from "./active_tracker.js";

let toolbarItems = document.querySelectorAll('.menu-item');
let mobileMenu = document.querySelector('.mobile-menu-icon');
let toolbarContainer = document.querySelector('.toolbar-container');

toolbarItems.forEach(item => {
    item.addEventListener('click', activeTracker);
});

mobileMenu.addEventListener('click', mobileMenuActive);

function mobileMenuActive(e) {
    toolbarContainer.classList.toggle('mobile-menu_active');

    // e = e.target.parentElement;
    // e.nextElementSibling.classList.remove('menu');
    // void e.nextElementSibling.offsetWidth;
    // e.nextElementSibling.classList.add('menu');
    // if (e.target.classList.contains('menu-animation')) {
    //     e.target.classList.remove('menu-animation');
    // } else {
    //     e.target.classList.add('menu-animation');
    // }


    // e.target.classList.remove('mobile-menu_animation');

    // e.target.classList.add('mobile-menu_animation');    
}

export { toolbarItems };