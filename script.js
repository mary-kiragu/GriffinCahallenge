const cartBtn = document.querySelector(".cartButton");

const closeCartBtn = document.querySelector(".close-cart");

const clearCartBtn = document.querySelector(".clearCart");

const cartDiv = document.querySelector(".cart");

const cartOverlay = document.querySelector(".cart-overlay");

const cartItem = document.querySelector(".cartItems");

const cartTotal = document.querySelector(".cartTotal");

const cartContent = document.querySelector(".cart-content");

const fruitsCenter = document.querySelector(".fruits-center");

let cart = [];
//used to get cart items
class fruits{
async getFruits(){
try {
    let result = await fetch("fruits.json");
    let data = await result.json();
   return data;
} catch (error) {
  console.log(Error) ; 
}
    
}
}
class fruitDisplay{

}
class fruitStore{

}

document.addEventListener("DOMContentLoaded",()=>{

    const fruitDisplays = new fruitDisplay();
     const fruit = new fruits();
    //getting all fruits stored
    
    console.log(fruit.getFruits());
})

// if (document.readyState == 'loading') {
//     document.addEventListener('DOMContentLoaded', loaded)
// }else{
//     loaded();
// }

// function loaded(){
//     var button = document.getElementsByClassName('add-to-cart-btn');
//     button.addEventListener('click', addToCart());

//     console.log(apple);
// }
// function addToCart(){
//     var apple = document.getElementsByClassName('apple')[0].innerText;
//     var appleImage = document.getElementsByClassName('fruit-image')[0].src;
//     var applePrice = document.getElementsByClassName('apple-price')[0].innerText;
//     console.log(applePrice);

// }
