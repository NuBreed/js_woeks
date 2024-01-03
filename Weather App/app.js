// insight page js

const userNumber = document.querySelector('.is-number')
let counter = 0
setInterval(() => {
  if (counter >= 40) {
    clearInterval
  } else {
    counter++
    userNumber.textContent = `${counter}%`
  }
}, 40)
