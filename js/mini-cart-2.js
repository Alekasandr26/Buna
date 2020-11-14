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
    totalItemsInCart()
}

function totalItemsInCart(){
    let totalItems = document.getElementsByClassName('cart-row').length;
    document.querySelector('.show-cart > div').innerHTML = totalItems;
}

// Count Item
let countItem = document.querySelector('.count-item');

//  Plus Button
let plusCount = document.querySelector('.plus');
plusCount.addEventListener('click', itemPlus);

// Mius Button
let minusCount = document.querySelector('.minus');
minusCount.addEventListener('click', itemMinus);


function itemPlus(){
  if( countItem.value >= 100){
      return
  }else{
    countItem.value ++
  }
}

function itemMinus(){
    if( countItem.value <= 1){
         return
    }else{
      countItem.value --
    }
}

// Add Item to cart 

let addToCartButton = document.querySelector('.add-to-cart');

addToCartButton.addEventListener('click', addToCartClicked)

function addToCartClicked(event){
    let button = event.target;
    let shopItem =  button.parentElement.parentElement.parentElement.parentElement;

    let nameItem = shopItem.getElementsByClassName('name-item')[0].innerText;
    let priceItem = shopItem.getElementsByClassName('price-item')[0].innerText;
    
    addItemToCart(nameItem, priceItem, countItem);
    
    updateCartTotal()
   
}

// Ad item to Cart
function addItemToCart(nameItem, priceItem, countItem){
    let cartRow = document.createElement('div');
    let cartItems = document.getElementsByClassName('cart-items')[0];
    let cartItemNames = cartItems.getElementsByClassName('cart-item-title');
    for ( let i = 0; i < cartItemNames.length; i++){
        if(cartItemNames[i].innerText == nameItem){
            return
        }
    }
    let cartRowsContent = 
    `
    <div class="cart-row d-flex justify-content-between text-center mb-2 font-weight-bold">
        <div class="cart-item-title w-33 h-100 fs-12 color-primary">${nameItem}</div>
        <div class="cart-item-price w-33 h-100 fs-12 color-primary">$ ${priceItem}</div>
        <div class="w-33 h-100 fs-12 d-flex justify-content-between ">
            <input class="cart-quantity-input w-50 h-100 border-none d-block" type="number" value="${countItem.value}">
            <button class="remove-cart btn btn-danger border-none h-100 w-25 fs-12 p-0 text-uppercase">x</button>
        </div>
    </div>
    `
    cartRow.innerHTML = cartRowsContent;
    cartItems.append(cartRow);
    totalItemsInCart()
    
    cartRow.getElementsByClassName('remove-cart')[0].addEventListener('click', removeItemFormCart);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}
// REmove item from cart
function removeItemFormCart(){
    let buttonCliced = event.target;
    buttonCliced.parentElement.parentElement.remove();

    totalItemsInCart();
    updateCartTotal();
}

// Quantty changed
function quantityChanged(event){
   let input = event.target;
   if(isNaN(input.value) || input.value <= 1){
     input.value = 1;
   }else if(input.value >= 100){
    input.value = 100;
   }
   updateCartTotal();
}



// update Cart Total 
function updateCartTotal(){
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
    
// Шелкнуть купить
document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyClicked);
function buyClicked () {
    alert('Спасибо за покупку');
    let cartItems = document.getElementsByClassName('cart-items')[0];
    while(cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal();
    totalItemsInCart();
}
