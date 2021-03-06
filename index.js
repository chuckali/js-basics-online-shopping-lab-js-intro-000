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
var sumTotal =0
for(var i=0;i<cart.length;i++)
  sumTotal = sumTotal + cart[i].itemPrice
  return sumTotal

}

function removeFromCart(item) {
for(var i=0;i<cart.length;i++){
if (cart[i].itemName===item){
cart.splice(i,1)
return cart}
}
return `That item is not in your cart.`
}


function placeOrder(cardNumber) {
  if (cardNumber === undefined)
  return `Sorry, we don't have a credit card on file for you.`
  else{
var tot = total()
  cart.splice(0,cart.length)
  return `Your total cost is $${tot}, which will be charged to the card ${cardNumber}.`

}}
