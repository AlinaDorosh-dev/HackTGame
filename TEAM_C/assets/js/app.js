window.addEventListener("load", () => {
const iconMenu = document.body.querySelector(".icon-menu") ;
const mainMenu = document.body.querySelector(".main-menu");
const closeMenu = document.body.querySelector(".icon-close-menu");

iconMenu.addEventListener("click", () => {
    mainMenu.classList.toggle("main-menu-show");
})
closeMenu.addEventListener("click", () => {
    mainMenu.classList.toggle("main-menu-show");
})

});