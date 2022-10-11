const menuEmail = document.querySelector(".nav-bar_email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuMin = document.querySelector(".menumin");
const phoneMenu = document.querySelector('.phone-menu');

const menuShoppingCar = document.querySelector('.nav-bar-shopping-car');
const mainMyorder = document.querySelector('.main_myorder');

menuMin.addEventListener('click', togglephoneMenu);
menuEmail.addEventListener('click', toggleDesktopMenu);
menuShoppingCar.addEventListener("click", togglemainMyorder)

/* Abre y cierra pestanas */
function toggleDesktopMenu(){
    const isMainMyOrderHidden = mainMyorder.classList.contains("inactive");
    if(isMainMyOrderHidden){}
    else{
        mainMyorder.classList.add('inactive')
    }
    desktopMenu.classList.toggle("inactive");
}
/* abre y cierra pestanas y ademas cierra otras si estan abiertas */
function togglephoneMenu(){
    const isMainMyOrderHidden = mainMyorder.classList.contains('inactive');
    if (isMainMyOrderHidden){
    }else{
        mainMyorder.classList.add('inactive');
    }
    phoneMenu.classList.toggle("inactive");
}
function togglemainMyorder(){
    const isMyphoneMenuHide = phoneMenu.classList.contains('inactive');
    const isDesktopMenuHidden = desktopMenu.classList.contains('inactive');

    if (isDesktopMenuHidden){
    }else{
        desktopMenu.classList.add('inactive');
    }
    if (isMyphoneMenuHide){
    }else{
        phoneMenu.classList.add('inactive');
    }
    mainMyorder.classList.toggle("inactive");
}