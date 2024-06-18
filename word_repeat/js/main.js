// Pagination Function
import { activeTracker } from "./active_tracker.js";

let toolbarItems = document.querySelectorAll('.menu-item');

toolbarItems.forEach(item => {
    item.addEventListener('click', activeTracker);
});  

export {toolbarItems};