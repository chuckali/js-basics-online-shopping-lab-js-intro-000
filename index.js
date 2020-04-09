var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
cart.push({ itemName: item, itemPrice:  Math.floor(Math.random()*100)+1 })
return  `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0){
  return "Your shopping cart is empty."
  }
  if(cart.length === 1){
  return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  var allCart = "In your cart, you have"
  for(var i=0;i<cart.length;i++){
    if (i===(cart.length-1)){
    return `${allCart} and ${cart[i].itemName} at $${cart[i].itemPrice}.`
    }
    allCart = `${allCart} ${cart[i].itemName} at $${cart[i].itemPrice},`
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
