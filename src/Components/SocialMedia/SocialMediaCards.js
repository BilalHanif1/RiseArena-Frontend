import React from 'react';
// IMAGES
import image1 from "../../Assets/img/card-1.jpg";
import image2 from "../../Assets/img/card-2.jpg";
import image3 from "../../Assets/img/card-3.jpg";
import image4 from "../../Assets/img/card-4.jpg";
import image5 from "../../Assets/img/card-5.jpg";
import image6 from "../../Assets/img/card-6.jpg";

const SocialMediaCards = (props) => {
  return (
    <div>
      <div className='row g-0 justify-content-center my-4 my-lg-5 smCardWrapper'>
        <section className='col-12 col-md-10 col-lg-8 col-xl-7 text-center'>
          <h3 className='fw-bold'>{props.heading}</h3>
          <p className='mt-3 mt-lg-4'>{props.description}</p>
        </section>
      </div>
      <div className='row g-4 justify-content-center align-items-center'>
        <div className='col-12 col-sm-6 col-lg-4'>
          <div class="card rounded border-0">
            <img src={image1} class="card-img-top rounded" alt="social media post" />
          </div>
        </div>
        <div className='col-12 col-sm-6 col-lg-4'>
          <div class="card rounded border-0">
            <img src={image2} class="card-img-top rounded" alt="social media post" />
          </div>
        </div>
        <div className='col-12 col-sm-6 col-lg-4'>
          <div class="card rounded border-0">
            <img src={image3} class="card-img-top rounded" alt="social media post" />
          </div>
        </div>
        <div className='col-12 col-sm-6 col-lg-4'>
          <div class="card rounded border-0">
            <img src={image4} class="card-img-top rounded" alt="social media post" />
          </div>
        </div>
        <div className='col-12 col-sm-6 col-lg-4'>
          <div class="card rounded border-0">
            <img src={image5} class="card-img-top rounded" alt="social media post" />
          </div>
        </div>
        <div className='col-12 col-sm-6 col-lg-4'>
          <div class="card rounded border-0">
            <img src={image6} class="card-img-top rounded" alt="social media post" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialMediaCards