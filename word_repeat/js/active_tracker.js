import { toolbarItems } from "./main.js";


let activeTracker = async (e) => {
    toolbarItems.forEach(item => {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
        }
    })
    e.target.parentElement.classList.toggle('active');

    // // Code for find Pages Urls
    // let url = await e.target.getAttribute('href');#dcdcaa
    // window.location.pathname = `/word_repeat${url}`;

    // e.preventDefault();
}

export { activeTracker };
