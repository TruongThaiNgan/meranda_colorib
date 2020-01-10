import "./sass/main.scss";
// import 'slick-carousel';
import 'slick-carousel/slick/slick';
import $ from 'jquery';
import 'jquery';
// import { addJs } from "./js/index.js";
// const carousel = document.querySelector(".owl-carousel");
$(".owl-carousel").slick({
    infinite: true,
    autoplaySpeed: 3000,
    // autoplay: true,
    arrows:true,
    prevArrow: '<div class="slick-prev"><i class="fas fa-chevron-left"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fas fa-chevron-right"></i></div>',
})
// addJs();
$("document").ready()

const icons_menu = document.querySelector(".icons-menu");
const mini_menu = document.querySelector(".menu-mini");
const icons_exit = document.querySelector(".icon-exit")
icons_menu.addEventListener('click',function(){
    mini_menu.classList.add("active"); 
});

icons_exit.addEventListener('click', function(){
    mini_menu.classList.remove('active');
});


const list_zoomIn = document.querySelectorAll(".ZoomOut-editor .prod-ZOE");
const list_zoomOut = document.querySelectorAll(".zoomIn-editor .prod-ZIE");
var index_news = 0;
for (let index = 0; index < list_zoomIn.length; index++) {
    const element = list_zoomIn[index];
    element.addEventListener('mouseover', function(){ 
        addActiveClass(index);
        changeZoomIn();
    })
}

function addActiveClass(index){
    list_zoomIn.forEach(element => {
        element.classList.remove('active');
    });
    index_news = index;
    list_zoomIn[index_news].classList.add("active");
}

function changeZoomIn() {
    list_zoomOut.forEach(element =>{
        element.style.display = "none";
    })
    list_zoomOut[index_news].style.display = "block";
}

setInterval(function(){
    if(index_news+1 <3){
        addActiveClass(index_news+1);
        changeZoomIn();
    }
    else{
        addActiveClass(0);
        changeZoomIn();
    }
}, 3000);