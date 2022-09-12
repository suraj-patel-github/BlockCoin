import React from 'react'
import crypto from '../images/crypto.jpg'
import news from '../images/news.jpg'

const Carousel = () => {
  return (
    <div class='row row-cols-1 row-cols-md-2 g-4'>
      <div class='col'>
        <div class='card carousel-card'>
          <img src={crypto} class='card-img-top' alt='' />
          <div class='card-body'>
            <h5 class='card-title text-dark'>
              Never Miss any fluctuation with the best crypto tracker in the
              market.
            </h5>
          </div>
        </div>
      </div>
      <div class='col'>
        <div class='card carousel-card'>
          <img src={news} class='card-img-top' alt='' />
          <div class='card-body'>
            <h5 class='card-title text-dark'>
              Never Miss any fluctuation with the best crypto tracker in the
              market.
            </h5>
          </div>
        </div>
      </div>
    </div>
    // <div
    //   id='carouselExampleIndicators carousel'
    //   class='carousel slide'
    //   data-ride='carousel'
    // >
    //   <div class='carousel-indicators'>
    //     <button
    //       type='button'
    //       data-bs-target='#carouselExampleIndicators'
    //       data-bs-slide-to='0'
    //       class='active'
    //       aria-current='true'
    //       aria-label='Slide 1'
    //     ></button>
    //     <button
    //       type='button'
    //       data-bs-target='#carouselExampleIndicators'
    //       data-bs-slide-to='1'
    //       aria-label='Slide 2'
    //     ></button>
    //   </div>
    //   <div class='carousel-inner'>
    //     <div class='carousel-item active'>
    //       <img class='testimonial-image' src={crypto} alt='' />
    //       <h2 class='testimonial-text'>
    //         Never Miss any fluctuation with the best crypto tracker in the
    //         market.
    //       </h2>
    //     </div>
    //     <div class='carousel-item '>
    //       <img class='testimonial-image' src={news} alt='' />
    //       <h2 class='testimonial-text'>
    //         Be updated with the latest business/financial news in India.
    //       </h2>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Carousel
