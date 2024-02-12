import { products } from './products.js'

const cart = document.querySelector('.cart')
const productContainer = document.querySelector('.product-container')

let productList
if (!products) {
  productContainer.textContent = 'loading'
} else {
  const productList = products.map((product) => {
    return `
    <div class="product-card" data-id="${product.id}">
    <img
    src=${product.image}
    alt=""
    class="product-img"
    />
    <div class="price">$${product.price}</div>
    <button class="add_to_cart" >add to carteee</button>
    </div>
    
    `
  })

  productContainer.innerHTML = productList
}
// function addToCart(id) {
//   console.log(id + 9)
// }
const add_to_carts = document.querySelectorAll('.add_to_cart')
const sidebar = document.querySelector('.sidebar')

const productsToCart = []
let selectedProduct

add_to_carts.forEach((add_to_cart) =>
  add_to_cart.addEventListener('click', function () {
    const data_id = add_to_cart.parentElement.dataset.id
    selectedProduct = products.find((product) => {
      return product.id === Number(data_id)
    })
    productsToCart.push(selectedProduct)

    cart.textContent = productsToCart.length
    const cartProducts = productsToCart
      .map((SP) => {
        return `
        <div class='cart-item' data-cart=${SP.id}>
    <img src="${SP.image}" alt="" class="cart-img">
    <span class="increase" >+</span>
    <span class="quantity">${SP.quantity}</span>
    <span>-</span>
    <span>${SP.price}</span>
        </div>`
      })
      .join(' ')
    sidebar.innerHTML = cartProducts
  })
)

if (productsToCart.length != 0) {
  console.log(sidebar)
  console.log('hhhf')
  const cartItems = document.querySelectorAll('.cart-item')
  console.log(cartItems)
  cartItems.forEach(
    (cartItem) => {
      cartItem.addEventListener('click'),
        function () {
          console.log(cartItem)
        }
    }
    // increaseQuantity.addEventListener('click', function () {
    //   const quantityWrapper = document.querySelector('.quantity')
    //   console.log(quantityWrapper.textContent)
    //   let changedtoNumber = Number(quantityWrapper.textContent)

    // quantityWrapper.textContent = changedtoNumber += 1
  )
}
