const images = document.querySelectorAll('article')
const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')
let slideIndex = 0
let index = null
function showSlide(index) {
  if (index >= images.length) {
    slideIndex = 0
  } else if (index < 0) {
    slideIndex = images.length - 1
  }
  images.forEach((img, index) => {
    img.style.display = 'none'
  })
  images[slideIndex].style.display = 'block'
}
displaySliders()
showSlide()
prevBtn.addEventListener('click', prevSlide)
nextBtn.addEventListener('click', nextSlide)
function prevSlide() {
  slideIndex--
  showSlide(slideIndex)
}
function nextSlide() {
  slideIndex++
  showSlide(slideIndex)
}

function displaySliders() {
  images.forEach((img) => (img.style.display = 'none'))
  images[slideIndex].style.display = 'block'
  index = setInterval(nextSlide, 5000)
}
console.log(prevBtn, nextBtn, images[0])
