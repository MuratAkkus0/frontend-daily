// Selecting Html elements
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const progressBar = document.querySelector('.progress-bar');

// Variables
let activeCounter = 1;
let formul;
// Listenings Button Events
nextBtn.addEventListener('click', nextFunc);
prevBtn.addEventListener('click', prevFunc);

function nextFunc(e) {
    const steps = document.querySelectorAll('.step');
    activeCounter++;
    if (activeCounter > 4) {
        activeCounter = 4;
        return;
    }
    formul = ((activeCounter - 1) / 3) * 100 + '%';
    progressBar.style.width = formul;
    controlActive()

}

function prevFunc(e) {
    activeCounter--;
    if (activeCounter < 1) {
        activeCounter = 1;
        return;
    }
    formul = ((activeCounter - 1) / 3) * 100 + '%';
    progressBar.style.width = formul;
    controlActive()
}

function controlActive(){
    let steps = document.querySelectorAll('.step');

    steps.forEach((item,index)=>{
        if ((index+1) == activeCounter){            
            if (item.classList.contains('active')){
                item.nextElementSibling.classList.remove('active')
            }else{
                item.classList.add('active')
            }
        }
    })
}