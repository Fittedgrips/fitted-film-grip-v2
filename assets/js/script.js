// ======================================
// FITTED FILM GRIP V4
// Professional JavaScript
// ======================================

// Sticky Header

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

if(window.scrollY > 80){

header.style.background="rgba(0,0,0,.95)";
header.style.boxShadow="0 8px 25px rgba(0,0,0,.45)";

}else{

header.style.background="rgba(0,0,0,.55)";
header.style.boxShadow="none";

}

});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// Loader

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},700);

}

});

// ======================================
// SCROLL REVEAL
// ======================================

const revealElements=document.querySelectorAll("section");

function revealOnScroll(){

revealElements.forEach(section=>{

const top=section.getBoundingClientRect().top;

if(top<window.innerHeight-120){

section.style.opacity="1";
section.style.transform="translateY(0)";

}

});

}

revealElements.forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(40px)";
section.style.transition="all .8s ease";

});

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();

// ======================================
// PORTFOLIO FILTER
// ======================================

const filterButtons=document.querySelectorAll(".filter-btn");
const portfolioItems=document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

const active=document.querySelector(".filter-btn.active");

if(active){

active.classList.remove("active");

}

button.classList.add("active");

const filter=button.dataset.filter;

portfolioItems.forEach(item=>{

if(filter==="all"||item.classList.contains(filter)){

item.style.display="block";

}else{

item.style.display="none";

}

});

});

});

// ======================================
// LIGHTBOX
// ======================================

const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightbox-img");
const closeLightbox=document.getElementById("close-lightbox");

if(lightbox&&lightboxImg&&closeLightbox){

document.querySelectorAll(".portfolio-item img").forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";
lightboxImg.src=img.src;

});

});

closeLightbox.addEventListener("click",()=>{

lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

});

}
// ==========================
// BACK TO TOP
// ==========================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

if (window.scrollY > 500) {

backToTop.style.display = "block";

} else {

backToTop.style.display = "none";

}

});

backToTop.addEventListener("click", () => {

window.scrollTo({

top: 0,
behavior: "smooth"

});

});
// ==========================
// SCROLL REVEAL
// ==========================

/*
const reveals = document.querySelectorAll("section");

function revealSections() {
  ...
}

window.addEventListener("scroll", revealSections);

revealSections();
*/
// Portfolio Lightbox
const portfolioImages = document.querySelectorAll(".portfolio img");

const lightbox = document.createElement("div");
lightbox.className = "lightbox";

const lightboxImg = document.createElement("img");

lightbox.appendChild(lightboxImg);
document.body.appendChild(lightbox);

portfolioImages.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  });
});

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});
