import { products } from './products.js'

const cart = document.querySelector('.cart')
const productContainer = document.querySelector('.product-container')

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
// function addToCart(id) {
//   console.log(id + 9)
// }
const add_to_carts = document.querySelectorAll('.add_to_cart')

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
    <img src="${SP.image}" alt="" class="cart-img">
    <span>${SP.price}</span>`
      })
      .join(' ')
    const sidebar = document.querySelector('.sidebar')
    console.log(sidebar, cartProducts)

    sidebar.innerHTML = cartProducts
  })
)