// insight page js
import { newsArray } from './data.js'
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

let articles = newsArray.map(function (article) {
  return `
  <div class="main-content-body-left">
            <div class="card-wrapper">
              <article class="news-card">
                <div class="news-card-header">
                  <img
                    src="${article.image}"
                    alt=""
                    class="news-card-img"
                  />
                </div>
                <div class="news-card-content">
                  <div class="news-card-headertext">
                    <h4>${article.title}}</h4>
                    <span>
                      <i class="fa-regular fa-bookmark"></i>
                    </span>
                  </div>
                  <p class="news-card-info">
                    "Agriculture is the most healthful, most useful and most
                    noble employment of man.
                  </p>
                  <h5 class="news-card-author">${article.author}</h5>
                  <h5 class="news-card-published">${article.date_published}</h5>
                </div>
              </article>
              </div>
          </div>
          <div class="main-content-body-right display">
            <div>
              <img
                src="${article.details.details_image}"
                alt=""
                class="card-details-img"
              />
              <h2 class="card-details-title">${article.details.details_title}</h2>
              <p>
                ${article.details.details_text}
              </p>
             
            </div>
          </div>
       
`
})

const wrapper = document.querySelector('.main-content-body')
wrapper.innerHTML = articles

const wrapperCard = document.querySelectorAll('.news-card')
console.log(wrapperCard)
wrapperCard.forEach((card) => {
  card.addEventListener('click', function () {
    document.querySelector('.main-content-body-right').style.display = 'block'
  })
})
