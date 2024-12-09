let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    
}

let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = () =>{
    themeToggler.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    themeToggler.classList.remove('active');
    
}

document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{

    btn.onclick = () =>{
        let color = btn.style.background;
        document.querySelector(':root').style.setProperty('--main-color', color);
    }
});

var swiper = new Swiper(".home-slider",{
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerview: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadow: true,
    },
    loop:true,
    autoplay:{
        delay: 3000,
        disableOnInteraction:false,
    }
});
var swiper = new Swiper(".review-slider",{
    slidesPerview:1,
    grabCursor: true,
    loop:true,
    spaceBetween:10,
    breakpoints: {
        0:{
            slidesPerview:1,
        },
        700: {
            slidesPerview: 2,

        },
        1050:{
            slidesPerview:3,
        },
    },

    autoplay:{
        delay: 5000,
        disableOnInteraction:false,
    }
});