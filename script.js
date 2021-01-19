if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', loaded)
}else{
    loaded();
}

function loaded(){
    var button = document.getElementsByClassName('add-to-cart-btn');
    button.addEventListener('click', addToCart());

    console.log(apple);
}
function addToCart(){
    var apple = document.getElementsByClassName('apple')[0].innerText;
    var appleImage = document.getElementsByClassName('fruit-image')[0].src;
    var applePrice = document.getElementsByClassName('apple-price')[0].innerText;
    console.log(applePrice);

}
