// insight page js
import { newsArray } from './data.js'
const userNumber = document.querySelector('.is-number')
if (document.path === 'insights.html') {
  let counter = 0
  setInterval(() => {
    if (counter >= 40) {
      clearInterval
    } else {
      counter++
      userNumber.textContent = `${counter}%`
    }
  }, 40)
}

let articles = newsArray.map(function (article) {
  return `
  
              <article class="news-card" data-id=${article.id}>
                <div class="news-card-header">
                  <img
                    src="${article.image}"
                    alt=""
                    class="news-card-img"
                  />
                </div>
                <div class="news-card-content">
                  <div class="news-card-headertext">
                    <h4>${article.title}</h4>
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
            
          
       
`
})

const wrapper = document.querySelector('.card-wrapper')
wrapper.innerHTML = articles

const wrapperCard = document.querySelectorAll('[data-id]')

wrapperCard.forEach((articleCard, index) => {
  const id = articleCard.getAttribute('data-id')
  const displayDetails = document.querySelector('[data-details]')
  const ok = displayDetails.getAttribute('data-details')
  articleCard.addEventListener('click', () => {
    if (id === ok) {
      console.log('true')
    }
  })
})

// weather

const inputText = document.querySelector('.search-input')
const searchBtn = document.querySelector('.search-btn')
const city = document.querySelector('.wp-header-city')
const temperature = document.querySelector('.wp-card-temp')
const weatherDesc = document.querySelector('.wp-header-details')
const current_weather = document.querySelector('.current_weather')
const UV_index = document.querySelector('.UV-index')
const humidity = document.querySelector('.humidity')
const wind_speed = document.querySelector('.wind-speed')
const visibility = document.querySelector('.visibility')
const date_searched = document.querySelector('.wp-header-date')
const now = new Date()
const year = now.getFullYear()
const month = now.getMonth() + 1
const day = now.getDate()

// date_searched.textContent = `${year}-0${month}-0${day}`

const fetching = async () => {
  navigator.geolocation.getCurrentPosition(async function (position) {
    const latitude = position.coords.latitude.toFixed(2)
    const longitude = position.coords.longitude.toFixed(2)
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`)

    const url = `https://api.brightsky.dev/weather?lat=${latitude}&lon=${longitude}&date=${year}-0${month}-0${day}`

    const response = await fetch(url)
    const result = await response.json()
    console.log(result.sources[0].station_name)
    const { weather } = result
    const weatherData = weather[0]

    city.textContent = result.sources[0].station_name
    temperature.textContent = weatherData.temperature
    current_weather.textContent = weatherData.icon
    UV_index.textContent = weatherData.precipitation
    visibility.textContent = weatherData.visibility
    humidity.textContent = weatherData.relative_humidity
    wind_speed.textContent = weatherData.wind_speed
  })
}
fetching()
