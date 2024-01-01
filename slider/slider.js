const images = document.querySelectorAll('article')
const prevBtn = document.querySelector('.prevBtn')
const nextBtn = document.querySelector('.nextBtn')
let slideIndex = 1
showSlide(slideIndex)

nextBtn.addEventListener('click', () => {
  showSlide(slideIndex + 1)
})

prevBtn.addEventListener('click', () => {
  showSlide(slideIndex - 1)
})

function showSlide(n) {
  let i

  images[slideIndex].style.display = 'block'
  if (n > images.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = images.length
  }
  for (i = 0; i < images.length; i++) {
    console.log(i)
    images[i].style.display = 'none'
  }
  images[slideIndex - 1].style.display = 'block'
}
console.log(prevBtn, nextBtn, images[0])
