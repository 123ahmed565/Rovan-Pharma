

    // top button
const scrollBtn= document.querySelector(".scroll-to-top");

scrollBtn.addEventListener("click",()=>{
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
});

document.addEventListener("scroll",(e)=>{
if(document.documentElement.scrollTop <=200){
  scrollBtn.style.display="none";
}else
{
  scrollBtn.style.display="block";
}
});


// preloader
window.onload = function () {
  document.querySelector('.loading-overlay ').style.display = "none";
};


// start swiper for succes partner
var swiper = new Swiper(".mySwiper5", {
  slidesPerView: 0,
  spaceBetween: 30,
  grabCursor:true,
  freeMode: true,
  loop:false,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints:{
    0: {
      slidesPerView: 2.5,
      spaceBetween: 15
  
    },
    600: {
      slidesPerView: 3.5,
      spaceBetween: 20
    },
    1000: {
      slidesPerView: 5,
      spaceBetween: 20
    },
      
  }
});


// animation
AOS.init({
  duration: 3000,
  once: true,
});