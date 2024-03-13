// Email Validation

var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let btn = document.getElementById('btn').addEventListener('click', validateEmail);

function validateEmail(e) {
    e.preventDefault();
    let input = document.getElementById('mailInput');
    let errBox = document.querySelector('.err');
    if (input.value) {
        if (!input.value.match(validRegex)) {
            errBox.innerText = '* Please enter a valid email address'
            errBox.style.color='hsl(0, 100%, 63%)'
            input.focus();
            return;
        } else {
            errBox.innerText = '';
            errBox.innerText = '* Successfull'
            errBox.style.color='green'

        }
        input.value = ''
    }
}