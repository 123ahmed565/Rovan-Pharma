

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

    
    // for sticky navbar content
    const body = document.querySelector("body");
    const navbar = document.querySelector(".navbar");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    menuBtn.onclick = ()=>{
      navbar.classList.add("show");
      menuBtn.classList.add("hide");
      body.classList.add("disabled");
    }
    cancelBtn.onclick = ()=>{
      body.classList.remove("disabled");
      navbar.classList.remove("show");
      menuBtn.classList.remove("hide");
    }
    window.onscroll = ()=>{
      this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
    }


    // preloader
window.onload = function () {
  //hide the preloader
  document.querySelector('.loader_bg').style.display = "none";
};



// animation
const faders=document.querySelectorAll('.fade-in');
const sliders=document.querySelectorAll('.slide-in');


const appearOptions = {
  threshold:0,
  rootMargin:"0px 0px -50px 0px",
};

const appearOnScroll = new IntersectionObserver(function(entries,appearOnScroll){
entries.forEach(entry=>{
  if(!entry.isIntersecting){
    return;
  }else{
    entry.target.classList.add('appear');
    appearOnScroll.unobserve(entry.target);
  }
})
},appearOptions);

faders.forEach(fader=>{
  appearOnScroll.observe(fader);
});

sliders.forEach(slider =>{
appearOnScroll.observe(slider);
});