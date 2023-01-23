/* Clase 1 

Vamos a trabajar con la clase " inactive" para hacer aparecer y desaparecer el menu a nuestro deseo

*/
// Estos elementos los vamos a ESCUCHAR 
const menuEmail         = document.querySelector('.navbar-email');                  //"boton Email"
const menuHamburgerIcon = document.querySelector('.menu');                          //"boton Menu Mobile"
const menuCarritoIcon  = document.querySelector('.navbar-shopping-cart')            //"Menu shopping cart"
// cuando escuchemos los anteriores, mostramos estos:
const desktopMenu = document.querySelector('.desktop-menu');                //
const mobileMenu  = document.querySelector('.mobile-menu');                  //
const aside       = document.querySelector('.product-detail');            //
// Escucho clicks:
menuEmail.addEventListener('click',mostrarMenu);
menuHamburgerIcon.addEventListener('click',mostrarMenuMobile)
menuCarritoIcon.addEventListener('click',mostrarAside)
//Inactive es un nombre cualquiera que le pusimos a la clase
// los elementos desaparecen porque a  la clase .inactive fuimos
// a CSS y para todos los elementos con esa clase pusimos display:none 
function mostrarMenu(){
    const isAsideClosed   = aside.classList.contains('inactive');

    if (!isAsideClosed){
        aside.classList.add('inactive');
        }

    //  cada vez que hagamos click, la siguiente orden "intercambia" 
// si esta la clase inactive la elimina y si no esta la coloca
    desktopMenu.classList.toggle('inactive')
}
function mostrarMenuMobile(){
    //RECORDAR: ESTA FUNCION SE EJECUTA CUANDO SE APRETA ICONO MENU MOBILE (HAMBURGUER)

    const   isAsideClosed         = aside.classList.contains('inactive');
// SI EL CARRITO ESTABA ABIERTO LO CIERRO
    if  (!isAsideClosed){
        aside.classList.add('inactive')
    }
// HAGO EL TOGGLE NORMAL DE LA FUNCION    
    mobileMenu.classList.toggle('inactive');
}
function mostrarAside(){
    //RECORDAR: ESTA FUNCION SE ABRE CUANDO SE APRETA CARRITO
    // variable booleana que dice si el menu mobile esta cerrado
    // si contiene .inactive significa que
    const   isMobileMenuClosed    = mobileMenu.classList.contains('inactive');
    const   isDesktopMenuClosed  = desktopMenu.classList.contains('inactive');
    //SI QUIERO ABRIR CARRITO Y MOBILE MENU ESTA ABIERTO LO CIERRO
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    // si al querer abrir el carrito esta abierto el menu desktop cierro este ultimo
    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')    
    }
    // HAGO EL TOGGLE NORMAL DE LA FUNCION
    aside.classList.toggle('inactive');    
    
    
    }