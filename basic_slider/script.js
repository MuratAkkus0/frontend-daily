let mainImage = document.querySelector('img');
let buttons = document.querySelectorAll('i')
let images = ['./images/1.jpg','./images/2.jpg','./images/3.jpg','./images/4.jpg','./images/5.jpg',];
let intervalTime = 3000;
let autoNext = true;
let slideIndex = 0;

let slideInterval = setInterval(nextSlide,intervalTime);
buttons.forEach((item)=>{
    item.addEventListener('click',()=>{
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide,intervalTime);
    })
});


function nextSlide(){
    slideIndex++;
    if (slideIndex == images.length){
        slideIndex = 0;
        mainImage.src = images[slideIndex];
    }else{
        mainImage.src = images[slideIndex];
    }
}
function prevSlide(){
    slideIndex--;
    if (slideIndex < 0){
        slideIndex = images.length-1;
        mainImage.src = images[slideIndex];
    }else{
        mainImage.src = images[slideIndex];
    }
}

