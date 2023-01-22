/* Clase 1 

Vamos a trabajar con la clase " inactive" para hacer aparecer y desaparecer el menu a nuestro deseo

*/

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu')


menuEmail.addEventListener('click',mostrarMenu);
menuHamburgerIcon.addEventListener('click',mostrarMenuMobile)


function mostrarMenu(){
//  cada vez que hagamos click, la siguiente orden "intercambia" 
// si esta la clase inactive la elimina y si no esta la coloca
    desktopMenu.classList.toggle('inactive')
}

function mostrarMenuMobile(){
    mobileMenu.classList.toggle('inactive');
}

