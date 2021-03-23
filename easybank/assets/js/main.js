const openBar = document.querySelector(".menu-bar");
const closeBar = document.querySelector(".close-bar");
const overlay = document.querySelector(".overlay");
const menuNav = document.querySelector(".mobile-nav");
let visibility = "visible" ;
let none = "none";
function openMobileHandler() {
    
    
    menuNav.classList.add(visibility);
    overlay.classList.add(visibility);
    openBar.classList.add(none);
    closeBar.classList.remove(none)
    
}
function closeMobileHandler(){
   
    menuNav.classList.remove(visibility);
    overlay.classList.remove(visibility);
    openBar.classList.remove(none);
    closeBar.classList.add(none)
    
}
openBar.addEventListener('click', openMobileHandler);
closeBar.addEventListener('click', closeMobileHandler)