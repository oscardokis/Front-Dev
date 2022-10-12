const menuEmail = document.querySelector(".nav-bar_email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuMin = document.querySelector(".menumin");
const phoneMenu = document.querySelector('.phone-menu');

const menuShoppingCar = document.querySelector('.nav-bar-shopping-car');
const mainMyorder = document.querySelector('.main_myorder');

const homeProducts = document.querySelector('.home_products');

const ProductDetails = document.querySelector('.product_details');
const ProductDetailsClose = document.querySelector('.product_details_close');

menuMin.addEventListener('click', togglephoneMenu);
menuEmail.addEventListener('click', toggleDesktopMenu);
menuShoppingCar.addEventListener("click", togglemainMyorder);
ProductDetailsClose.addEventListener('click', AddProductDetailsClose);

/* abre y cierra pestanas y ademas cierra otras si estan abiertas */
function togglephoneMenu(){
    mainMyorder.classList.add('inactive');
    phoneMenu.classList.toggle("inactive");
    ProductDetails.classList.add('inactive');
}
function toggleDesktopMenu(){
    mainMyorder.classList.add('inactive');
    desktopMenu.classList.toggle("inactive");
    ProductDetails.classList.add('inactive');
}
function togglemainMyorder(){
    desktopMenu.classList.add('inactive');
    phoneMenu.classList.add('inactive');
    ProductDetails.classList.add('inactive');
    mainMyorder.classList.toggle("inactive");
}
function OpenProductDetails(){
    desktopMenu.classList.add('inactive');
    phoneMenu.classList.add('inactive');
    ProductDetails.classList.remove("inactive");
    mainMyorder.classList.add("inactive");

}
function AddProductDetailsClose(){
    ProductDetails.classList.add('inactive');
}


const productList = [];
productList.push({
    name: "Computer",
    price: "1200",
    imagen:"./assets/product-img.png",
});
productList.push({
    name: "mouse",
    price: "40",
    imagen:"./assets/product-img.png",
});
productList.push({
    name: "keyboard",
    price: "20",
    imagen:"./assets/product-img.png",
});

function RenderProducts(arr){
    for(product of arr){

        const homeProductSelf = document.createElement('div');
        homeProductSelf.classList.add('home_product_self');
    
        const homeProductImg = document.createElement('img');
        homeProductImg.setAttribute('src', './assets/product-img.png');
        homeProductImg.addEventListener('click', OpenProductDetails);
    
        const homeProductSelfPrice = document.createElement('p')
        homeProductSelfPrice.innerText = '$' + product.price;
    
        const homeProductSelfName = document.createElement('p')
        homeProductSelfName.innerText = product.name;
    
        const homeProductSelfCar = document.createElement('div');
        homeProductSelfCar.classList.add('home_product_self_car');
        const homeProductSelfCarImg = document.createElement('img');
        
        homeProductSelfCar.classList.add = ('home_product_self_car');
        homeProductSelfCarImg.setAttribute('src', './assets/logo-shopping-car.svg');
        homeProductSelfCar.appendChild(homeProductSelfCarImg);
        
        homeProductSelf.append(homeProductImg, homeProductSelfPrice, homeProductSelfName, homeProductSelfCar);
    
        homeProducts.appendChild(homeProductSelf);
    };
};
RenderProducts(productList);
