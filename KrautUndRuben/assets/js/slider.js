const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

var swiper = new Swiper(".mySwiper", {
    
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    loop:true,
    lazy:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

});