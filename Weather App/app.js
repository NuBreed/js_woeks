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

// const wrapper = document.querySelector('.main-content-body')
// wrapper.innerHTML = articles

// const wrapperCard = document.querySelectorAll('.news-card')
// console.log(wrapperCard)
// wrapperCard.forEach((card) => {
//   card.addEventListener('click', function () {
//     document.querySelector('.main-content-body-right').style.display = 'block'
//   })
// })

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

// searchBtn.addEventListener('click', async function () {
//   const searchDetail = inputText.value.trim()

//   if (searchDetail === '') {
//     alert('kindly enter a city name')
//     return
//   }

//   const weatherDetails = await fetching()

//   console.log(weatherDetails.data)

//   city.textContent = weatherDetails.data.city
//   temperature.textContent = weatherDetails.data.temp
//   weatherDesc.textContent = weatherDetails.data.aqi_description
//   current_weather.textContent = weatherDetails.data.current_weather
//   UV_index.textContent = weatherDetails.data.uv_index
//   visibility.textContent = weatherDetails.data.visibility
//   humidity.textContent = weatherDetails.data.humidity
//   wind_speed.textContent = weatherDetails.data.wind
//   weatherWrapper.computedStyleMap.backgroundImage = url(weatherDetails.bg_image)
// })

const fetching = async () => {
  navigator.geolocation.getCurrentPosition(async function (position) {
    const latitude = position.coords.latitude.toFixed(2)
    const longitude = position.coords.longitude.toFixed(2)
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`)

    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth() + 1
    const day = now.getDate()
    // const url = `
    //             https://api.brightsky.dev/
    //             weather?lat=${latitude}&lon=${longitude}&date=${year}-0${month}-0${day}`
    const url = `https://api.brightsky.dev/weather?lat=${latitude}&lon=${longitude}&date=${year}-0${month}-0${day}`

    const response = await fetch(url)
    const result = await response.json()
    const { weather } = result
    const weatherData = weather[0]
    console.log(weatherData, weather)
    // city.textContent = weatherDetails.data.city
    temperature.textContent = weatherData.temperature
    current_weather.textContent = weatherData.icon.toUpperCase()
    UV_index.textContent = weatherData.precipitation
    visibility.textContent = weatherData.visibility
    humidity.textContent = weatherData.relative_humidity
    wind_speed.textContent = weatherData.wind_speed
  })
}
fetching()

// city.textContent = weatherDetails.data.city
// temperature.textContent = weatherDetails.data.temp
// weatherDesc.textContent = weatherDetails.data.aqi_description
// current_weather.textContent = weatherDetails.data.current_weather
// UV_index.textContent = weatherDetails.data.uv_index
// visibility.textContent = weatherDetails.data.visibility
// humidity.textContent = weatherDetails.data.humidity
// wind_speed.textContent = weatherDetails.data.wind
// weatherWrapper.computedStyleMap.backgroundImage = url(weatherDetails.bg_image)
