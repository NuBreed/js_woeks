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

let articles = newsArray.map(function (element) {
  return `
<article class="news-card">
                <div class="news-card-header">
                  <img
                    src="${element.image}"
                    alt=""
                    class="news-card-img"
                  />
                </div>

                <div class="news-card-content">
                  <div class="news-card-headertext">
                    <h4>${element.title}</h4>
                    <span>
                      <i class="fa-regular fa-bookmark"></i>
                    </span>
                  </div>
                  <p class="news-card-info">
                    "Agriculture is the most healthful, most useful and most
                    noble employment of man.
                  </p>
                  <h5 class="news-card-author">${element.author}</h5>
                  <h5 class="news-card-published">${element.date_published}</h5>
                </div>
              </article>
`
})
const wrapper = document.querySelector('.card-wrapper')

wrapper.innerHTML = articles
const bookmarks = document.querySelectorAll('.fa-bookmark')

bookmarks.forEach((bookmark, index) => {
  bookmark.addEventListener('click', function () {
    console.log('food', index + 1)
    const details = newsArray.map((article, index_1) => {
      console.log(index === index_1)
      console.log(article)
      const detialsWrapper = document.querySelectorAll(
        '.main-content-body-right'
      )
      if (index === index_1) {
        bookmark.style.color = 'red'
        detialsWrapper.innerHTML = `<div>
              <img
                src="${article.details.details_image}"
                alt=""
                class="card-details-img"
              />
              <h2 class="card-details-title">${article.details.details_title}</h2>
              <p>
                ${article.details.details_title}
              </p>
             
            </div>
         
        
        `
      }
    })
  })
})
