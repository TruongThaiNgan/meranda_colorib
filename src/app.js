import "./sass/main.scss";
// import 'slick-carousel';
import 'slick-carousel/slick/slick';
import 'jquery';
// import { addJs } from "./js/index.js";
const carousel = document.querySelector(".owl-carousel");
carousel.slick({
    infinite: true
})
// addJs();

const icons_menu = document.querySelector(".icons-menu");
const mini_menu = document.querySelector(".menu-mini");
const icons_exit = document.querySelector(".icon-exit")
icons_menu.addEventListener('click',function(){
    mini_menu.classList.add("active"); 
});

icons_exit.addEventListener('click', function(){
    mini_menu.classList.remove('active');
});

const carousel_next = document.querySelector('.carousel .fa-chevron-right');
const carousel_pre = document.querySelector('.carousel .fa-chevron-left');

var carousel_index = 0;

// carousel_next.addEventListener('click',function(){
//     carousel_index ++;
//     carousel_func() ;
// })


// carousel_pre.addEventListener('click',function(){
//     carousel_index --;
//     carousel_func() ;
// })

// function carousel_func(){
//     if(carousel_index >=2){
//         carousel_index = 0;
//     }
//     if(carousel_index <=-1){
//         carousel_index = 1;
//     }
//     if(carousel_index == 0){
//         carousel.classList.remove("active_2");
//     }
//     else
//         carousel.classList.add("active_2");
// }
