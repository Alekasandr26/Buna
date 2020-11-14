
 // Show cart
 $('.show-cart').on('click',function(){
    $(this).toggleClass('border-primary color-primary');
    $('.show-search').removeClass('border-primary color-primary');

    $('.show-mini-cart').slideToggle('slow');
    $('.search-slide-down').slideUp('slow');
})



if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}
else{
    ready()
}

function ready(){
    let removeCartItemButtons = document.getElementsByClassName('remove-cart');
    for(let i = 0; i < removeCartItemButtons.length; i++ ){
        let button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem)
    }
    let quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for(let i = 0; i < quantityInputs.length; i++){
        let input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }
    let addToCartButtons = document.getElementsByClassName('shop-item-button');
    for(let i = 0; i < addToCartButtons.length; i++){
        let button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked);
    }

    totalItemsInCart();
    document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyClicked);
}

// Шелкнуть купить
function buyClicked () {
    alert('Спасибо за покупку');
    let cartItems = document.getElementsByClassName('cart-items')[0];
    while(cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal();
    totalItemsInCart();
}



// Удалять элементы с корзины
function removeCartItem() {
    let buttonCliked =  event.target;
    buttonCliked.parentElement.parentElement.remove();
    updateCartTotal();
    totalItemsInCart();
}


// Менять количество
function quantityChanged(event){
    let input = event.target;
    if(isNaN(input.value) || + input.value <= 0){
        input.value = 1;
    }
    updateCartTotal();
}

// Шелкнуть добавить в корзину
function addToCartClicked(event){
    let button = event.target;
    let shopItem = button.parentElement;
    let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;

    addItemToCart(title, price);
    updateCartTotal();
    totalItemsInCart();
}

// Добовлять данные в кознину
function addItemToCart(title, price){
    let cartRow = document.createElement('div');
    let cartItems = document.getElementsByClassName('cart-items')[0];
    let cartItemNames = cartItems.getElementsByClassName('cart-item-title');
    for ( let i = 0; i < cartItemNames.length; i++){
        if(cartItemNames[i].innerText == title){
            return
        }
    }
    let cartRowsContent = 

    `
    <div class="cart-row d-flex justify-content-between text-center mb-2 font-weight-bold">
        <div class="cart-item-title w-33 h-100 fs-12 color-primary">${title}</div>
        <div class="cart-item-price w-33 h-100 fs-12 color-primary">${price}</div>
        <div class="w-33 h-100 fs-12 d-flex justify-content-between ">
            <input class="cart-quantity-input w-50 h-100 border-none d-block" type="number" value="1">
            <button class="remove-cart btn btn-danger border-none h-100 w-25 fs-12 p-0 text-uppercase">x</button>
        </div>
    </div>
    `
    cartRow.innerHTML = cartRowsContent;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
}





function totalItemsInCart(){
    let totalItems = document.getElementsByClassName('cart-row').length;
    document.querySelector('.show-cart > div').innerHTML = totalItems;
}

// Обновить корзину
function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName('cart-items')[0];
    let cartRows = cartItemContainer.getElementsByClassName('cart-row');
    let total = 0;
    for(let i = 0; i < cartRows.length; i++){
        let cartRow = cartRows[i];
        let priceElement = cartRow.getElementsByClassName('cart-item-price')[0];
        let quantityElement = cartRow.getElementsByClassName
        ('cart-quantity-input')[0];

        let price = priceElement.innerText.replace('$', '');
        let quantity = quantityElement.value;

        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100

    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
    
}



// Shop Item whis Desc
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let priceItem = document.querySelector('.price-item')
let itemTitle = document.querySelector('.name-item');


let addItemToCart2 = document.querySelector('.add-to-cart')
let total = priceItem.innerHTML

let counItem = document.querySelector('.count-item')
plus.addEventListener('click', plusItem)
minus.addEventListener('click', minusItem)
addItemToCart2.addEventListener('click', addToCart2)
function plusItem(){
    if(counItem.value == 100){
        counItem.value = 100
        return
    }else{
        counItem.value ++
        total =  +priceItem.innerHTML * counItem.value
    }
}
function minusItem(){
    if(counItem.value == 1){
         counItem.value = 1
        return
    }else{
        counItem.value --
        total =  +priceItem.innerHTML * counItem.value
    }
}

function addToCart2(){
    let cartRow =  document.createElement('div');
    let cartItems = document.querySelector('.cart-items');
    let cartItemNames2 = document.querySelector('.cart-item-title')
    let cartTotal = document.querySelector('.cart-total-price');

    
    if(cartItemNames2 === itemTitle){
        return
    }

    let cartRowsContent = 

    `
    <div class="cart-row d-flex justify-content-between text-center mb-2 font-weight-bold">
        <div class="cart-item-title w-33 h-100 fs-12 color-primary">${itemTitle.innerText}${counItem.value}</div>
        <div class="cart-item-price w-33 h-100 fs-12 color-primary">${priceItem.innerText}</div>
        <div class="w-33 h-100 fs-12 ">
            <button class="remove-cart btn btn-danger border-none h-100 w-25 fs-12 p-0 text-uppercase">x</button>
        </div>
    </div>
    `
    cartRow.innerHTML = cartRowsContent;
    cartItems.append(cartRow);
    cartTotal.innerHTML = total
}
