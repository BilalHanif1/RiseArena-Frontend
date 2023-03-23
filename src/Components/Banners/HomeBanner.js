import React from 'react'
import { Link } from 'react-router-dom';
// SLIDER
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
// IMAGES
import heroImage from "../../Assets/img/heroImage.jpg";
import heroImage2 from "../../Assets/img/heroImage2.jpg";
import heroImage3 from "../../Assets/img/heroImage3.jpg";
// ICONS
import { ArrowRight } from 'react-bootstrap-icons';


const HomeBanner = () => {
  return (
    <div className='actionAreaWrapper row g-0'>
      <div className='actionArealeft'></div>
      <div className='actionAreaRight'>
        {/* Links */}
        <div className='overflow-hidden mt-3 mt-lg-4 d-none d-sm-block'>
          <div className='row g-3 justify-content-center align-items-center actionLinks'>
            <div className='col-auto text-center'>
              <Link to={"/"} className="socialCardLinks" >
                <p className='mb-0'>The Blog</p>
              </Link>
            </div>
            <div className='col-auto text-center'>
              <Link to={"/"} className="socialCardLinks" >
                <p className='mb-0'>Visit The Shop</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='heroSliderWrapper'>
        <Splide hasTrack={false} aria-label="heroSlider" options={{
          type: 'loop',
          autoplay: true,
          perPage: 1,
          perMove: 1,
          gap: '3rem',
          arrows: false,
          padding: '5rem',
          pagination: false,
          focus: "center",
          cover: true,
          // width: '80%',
        }}>
          <div className="custom-wrapper">
            <SplideTrack>
              <SplideSlide>
                <div className='heroSliderContent rounded'>
                  <div className='row g-0 justify-content-center align-items-center'>
                    <img src={heroImage} alt="clothing store" className='rounded' />
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className='heroSliderContent rounded'>
                  <div className='row g-0 justify-content-center align-items-center'>
                    <img src={heroImage2} alt="clothing store" className='rounded' />
                  </div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className='heroSliderContent rounded'>
                  <div className='row g-0 justify-content-center align-items-center'>
                    <img src={heroImage3} alt="clothing store" className='rounded' />
                  </div>
                </div>
              </SplideSlide>
            </SplideTrack>

            <div className="splide__arrows" />
          </div>
        </Splide>
      </div>
      {/* Hero Highlights */}
      <div className='heroHighlights p-2 p-sm-3 p-lg-4 d-none d-md-block'>
        <div className='row g-0 justify-content-center align-items-center py-5 px-4'>
          <div className='col-auto'>
            <h1>Shop My Exciting Amazon Store</h1>
            <p className=' mt-3'>Lorem ipsum dolor sit amet consectetur. Vitae tortor ipsum nunc id diam id accumsan. Ultrices ornare et sit metus in penatibus cras diam.</p>
          </div>
          <div className='col-12 shopBtn text-center'>
            <button className='btn w-100'>shop now</button>
          </div>
        </div>
      </div>
      {/* Hero Action Highlights */}
      <div className='heroActionHighlights d-none d-sm-block'>
        <div className='row g-0 align-items-center px-4 pt-2'>
          <section className='col-auto'>
            <h3>New Collection</h3>
            <p className='text-secondary my-4'>Luxury big sofa 2-seat</p>
          </section>
        </div>
        <div className='row g-0 align-items-center justify-content-between px-4 pb-2'>
          <div className='col'>
            <p className='text-black mb-0'>Rp 17.000.000</p>
          </div>
          <div className='col-auto heroActionArrow align-self-center pb-1'>
            <ArrowRight />
          </div>
        </div>
      </div>
      <div className='heroActionBtn d-block d-sm-none'>
        <div className='row g-0 justify-content-center align-items-center'>
          <div className='col-auto shopBtn text-center'>
            <button className='btn w-100'>shop now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner