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

// Clase 4: productos
// creamos un array de objetos, donde cada objeto que le agregamos es un producto

// creo una querySelector para  el elemento cards-containar y agregarle cada productCard 
const cardsContainer = document.querySelector('.cards-container')

const productList = [];
productList.push({
    // cada objeto tiene los nombre precio e imagen
    name: 'bike',
    price: 1000,
    image: "./iara/iara2.jpg"
});
productList.push({
    name: 'megara2',
    price: 1000,
    image: "./iara/iara1.jpg"
});
productList.push({
    name: 'Megara3',
    price: 1500,
    image: "./iara/iara3.jpg"
});
/*
<div class="product-card">
      <img src="./iara/iara2.jpg" alt="">
      <div class="product-info">
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
      </div>
    </div>
    */

// Aqui creamos el html de cada producto con la estructura de arriba


function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div')
        productCard.classList.add("product-card");
    
        // product = { name, price, image}
        // entonces tenemos que colocar product.image 
        // es decir la imagen correspondiente de cada objeto
        const productImg = document.createElement('img')
        productImg.setAttribute('src',product.image);
        
        // hacemos lo mismo para el segundo div de clase "product-info"
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        //hacemos lo mismo para el 3 div con el precio y el nombre
    
        const productInfoDiv = document.createElement('div');       //este es el dive que tiene el precio y el nombre
        
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = document.Name;
    
        //inserto productPrice y productName en produictInfoDiv
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
    
        const productInfoFigure = document.createElement('Figure');
        const iconCart = document.createElement('img')
        iconCart.setAttribute('src',"./icons/bt_add_to_cart.svg");
        
        // con creteElement() creamos cada elemento html y con classList.add() le acregamos su clase
        // luego para ordenarlos usamos append child
    
        // insertamos el icono iconCart en el elemento figure
        productInfoFigure.appendChild(iconCart)
    
        //despues inserto productInfoDiv y productInfoFigure en productInfo
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
        // y ahora finalmente inserto la imagen (img) y el productInfo adentro del div productCArd
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        //hasta aca tenemos productCard terminado.
        //Ahora hay que insertar el productCard en el div cards-Container
    
        cardsContainer.appendChild(productCard)
        
    }
}

renderProducts (productList)









