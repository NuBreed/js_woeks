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
const newsArray = [
  {
    id: 1,
    image:
      'https://images.pexels.com/photos/219794/pexels-photo-219794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Hay When You Need It',
    author: 'George Washington',
    date_published: 'Thursday 09 2022',
    details: {
      details_image:
        'https://images.pexels.com/photos/219794/pexels-photo-219794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      details_title: 'Strawberry Ginger',

      details_text:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque molestiae accusamus maiores vero laudantium animi a dolores vel, libero, expedita blanditiis unde! Ea voluptate aspernatur in! Numquam quidem, exercitationem cupiditate saepe illum ipsum facere voluptatem iste dolorem officia fuga, reprehenderit vero vitae doloribus laudantium voluptatibus in molestias fugit hic nam cumque laborum odit explicabo! Nulla velit nemo perferendis assumenda voluptatum impedit dolorum saepe tempora quisquam aspernatur. Voluptate sequi modi quam saepe provident? Tenetur soluta iure sint maiores necessitatibus. Unde non eos omnis quaerat numquam. Sequi repellendus cumque consequatur quos eum aperiam quia quis perspiciatis amet odit natus iste minima maiores, porro officia architecto quisquam adipisci nam perferendis necessitatibus blanditiis debitis harum molestiae! Sint commodi aspernatur velit, tempora tempore consectetur, tenetur quae rem inventore quo non nam dicta earum iusto perspiciatis maxime vel cumque vero adipisci odio. Sunt assumenda, adipisci reiciendis qui ducimus molestiae ipsum doloremque quas, ut quo, perferendis accusamus laudantium. Officiis voluptatem facere consequatur provident dicta possimus illo ut, laudantium omnis, quis eligendi? Numquam obcaecati accusamus, inventore provident dolor doloremque magnam ducimus. Magnam dolor, dicta, illo ducimus impedit dignissimos ut omnis quas natus perferendis velit optio, alias quasi corrupti. Culpa mollitia ipsa quasi soluta atque veniam corporis esse nihil.',
    },
  },
  {
    id: 2,
    image:
      'https://images.pexels.com/photos/219794/pexels-photo-219794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Hay When You Need It',
    author: 'George Washington',
    date_published: 'Thursday 09 2022',
    details: {
      details_image:
        'https://images.pexels.com/photos/219794/pexels-photo-219794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      details_title: 'Strawberry Ginger',

      details_text:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque molestiae accusamus maiores vero laudantium animi a dolores vel, libero, expedita blanditiis unde! Ea voluptate aspernatur in! Numquam quidem, exercitationem cupiditate saepe illum ipsum facere voluptatem iste dolorem officia fuga, reprehenderit vero vitae doloribus laudantium voluptatibus in molestias fugit hic nam cumque laborum odit explicabo! Nulla velit nemo perferendis assumenda voluptatum impedit dolorum saepe tempora quisquam aspernatur. Voluptate sequi modi quam saepe provident? Tenetur soluta iure sint maiores necessitatibus. Unde non eos omnis quaerat numquam. Sequi repellendus cumque consequatur quos eum aperiam quia quis perspiciatis amet odit natus iste minima maiores, porro officia architecto quisquam adipisci nam perferendis necessitatibus blanditiis debitis harum molestiae! Sint commodi aspernatur velit, tempora tempore consectetur, tenetur quae rem inventore quo non nam dicta earum iusto perspiciatis maxime vel cumque vero adipisci odio. Sunt assumenda, adipisci reiciendis qui ducimus molestiae ipsum doloremque quas, ut quo, perferendis accusamus laudantium. Officiis voluptatem facere consequatur provident dicta possimus illo ut, laudantium omnis, quis eligendi? Numquam obcaecati accusamus, inventore provident dolor doloremque magnam ducimus. Magnam dolor, dicta, illo ducimus impedit dignissimos ut omnis quas natus perferendis velit optio, alias quasi corrupti. Culpa mollitia ipsa quasi soluta atque veniam corporis esse nihil.',
    },
  },
  {
    image:
      'https://images.pexels.com/photos/219794/pexels-photo-219794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Hay When You Need It',
    author: 'George Washington',
    date_published: 'Thursday 09 2022',
  },
  {
    image:
      'https://images.pexels.com/photos/219794/pexels-photo-219794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Hay When You Need It',
    author: 'George Washington',
    date_published: 'Thursday 09 2022',
  },
  {
    image:
      'https://images.pexels.com/photos/219794/pexels-photo-219794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Hay When You Need It',
    author: 'George Washington',
    date_published: 'Thursday 09 2022',
  },
  {
    image:
      'https://images.pexels.com/photos/219794/pexels-photo-219794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Hay When You Need It',
    author: 'George Washington',
    date_published: 'Thursday 09 2022',
  },
]

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
    const details = articles.map((article, index_1) => {
      console.log(index === index_1)
      const detialsWrapper = document.querySelectorAll(
        '.main-content-body-right'
      )
      if (index === index_1) {
        detialsWrapper.innerHTML = `
       
            <div>
              <img
                src="${article.details.details_image}"
                alt=""
                class="card-details-img"
              />
              <h2 class="card-details-title">Strawberry Ginger</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
                molestiae accusamus maiores vero laudantium animi a dolores vel,
                libero, expedita blanditiis unde! Ea voluptate aspernatur in!
                Numquam quidem, exercitationem cupiditate saepe illum ipsum
                facere voluptatem iste dolorem officia fuga, reprehenderit vero
                vitae doloribus laudantium voluptatibus in molestias fugit hic
                nam cumque laborum odit explicabo! Nulla velit nemo perferendis
                assumenda voluptatum impedit dolorum saepe tempora quisquam
                aspernatur. Voluptate sequi modi quam saepe provident? Tenetur
                soluta iure sint maiores necessitatibus. Unde non eos omnis
                quaerat numquam. Sequi repellendus cumque consequatur quos eum
                aperiam quia quis perspiciatis amet odit natus iste minima
                maiores, porro officia architecto quisquam adipisci nam
                perferendis necessitatibus blanditiis debitis harum molestiae!
                Sint commodi aspernatur
              </p>
              <p>
                , velit, tempora tempore consectetur, tenetur quae rem inventore
                quo non nam dicta earum iusto perspiciatis maxime vel cumque
                vero adipisci odio. Sunt assumenda, adipisci reiciendis qui
                ducimus molestiae ipsum doloremque quas, ut quo, perferendis
                accusamus laudantium. Officiis voluptatem facere consequatur
                provident dicta possimus illo ut, laudantium omnis, quis
                eligendi? Numquam obcaecati accusamus, inventore provident dolor
                doloremque magnam ducimus. Magnam dolor, dicta, illo ducimus
                impedit dignissimos ut omnis quas natus perferendis velit optio,
                alias quasi corrupti. Culpa mollitia ipsa quasi soluta atque
                veniam corporis esse nihil.
              </p>
            </div>
         
        
        `
      }
    })
  })
})
