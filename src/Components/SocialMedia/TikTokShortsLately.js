import React from 'react';
// SPLIDE SLIDER
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
// IMAGES
import frame from "../../Assets/img/sliderImage1.jpg";
import building from "../../Assets/img/sliderImage2.jpg";
import whiteFlowers from "../../Assets/img/sliderImage3.jpg";
import oldCar from "../../Assets/img/sliderImage4.jpg";



const TikTokShortsLately = () => {
  return (
    <div>
      <div className='row g-1 justify-content-center align-items-center tikTokSliderWrapper'>
        <div className='col-12 col-lg-5 collectionRedirectWrapper'>
          <div className='collectionRedirect'>
            <h2 className='fw-bold'>Tik Tok Short Lately</h2>
            <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
            <div className='row g-0 justify-content-center justify-content-lg-start align-items-center my-3 my-lg-4'>
              <div className='col-auto'>
                <button className='btn'>View collection</button>
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 col-lg-7 position-relative'>
          <div className='overflow-hidden'></div>
          <div className='sliderMainWrapper'>
            <Splide hasTrack={false} aria-label="tikTokShorts" options={{
              type: 'loop',
              autoplay: true,
              perPage: 3,
              perMove: 1,
              gap: '0rem',
            }}>
              <div className="custom-wrapper">
                <SplideTrack>
                  <SplideSlide>
                    <div className='sliderContent rounded'>
                      <div className='row g-0 justify-content-center align-items-center'>
                        <img src={frame} alt="home decor frame" className='rounded' />
                      </div>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className=' sliderContent rounded'>
                      <div className='row g-0 justify-content-center align-items-center'>
                        <img src={building} alt="a building" className='rounded' />
                      </div>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className=' sliderContent rounded'>
                      <div className='row g-0 justify-content-center align-items-center'>
                        <img src={whiteFlowers} alt="white flowers" className='rounded' />
                      </div>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className=' sliderContent rounded'>
                      <div className='row g-0 justify-content-center align-items-center'>
                        <img src={oldCar} alt="vintage car under a tree" className='rounded' />
                      </div>
                    </div>
                  </SplideSlide>
                </SplideTrack>

                <div className="splide__arrows" />
              </div>
            </Splide>
          </div>
        </div>
      </div>

    </div>
  )
}

export default TikTokShortsLately