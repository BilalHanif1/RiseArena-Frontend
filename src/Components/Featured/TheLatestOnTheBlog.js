import React from 'react';
// IMAGES
import sofa from "../../Assets/img/black-sofa.jpg";
import VaccationGear from "../../Assets/img/vaccation-gear.jpg";
import watchNTie from "../../Assets/img/watch-n-tie.jpg";

const TheLatestOnTheBlog = () => {
  return (
    <div className='overflow-hidden mb-4 mb-lg-5 pb-3 pb-lg-5 latestOnBlog'>
      <div className='row g-0 justify-content-center mt-4 mt-lg-5 mb-3 mb-lg-4'>
        <section className='col-12 col-md-9 col-lg-8 col-xl-7 col-xxl-5 text-center'>
          <h3 className='fw-bold'>The latest on the blog</h3>
          <p className='mt-3 mt-lg-4'>Effortlessly take your first steps in EOS photography and enjoy great picture quality
            with countless creative opportunities.</p>
        </section>
      </div>
      <div className='row g-4 justify-content-center align-items-center'>
        <div className='col-12 col-sm-6 col-lg-4'>
          <div class="card rounded border-0">
            <img src={sofa} class="card-img-top rounded" alt="black sofa" />
            <section class="card-body px-0">
              <figcaption class="figure-caption">Furniture</figcaption>
              <h4 style={{ fontWeight: 500 }} className="py-2 py-md-3">Furniture</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </section>
          </div>
        </div>
        <div className='col-12 col-sm-6 col-lg-4'>
          <div class="card rounded border-0">
            <img src={VaccationGear} class="card-img-top rounded" alt="vaccation gear" />
            <section class="card-body px-0">
              <figcaption class="figure-caption">Life Style</figcaption>
              <h4 style={{ fontWeight: 500 }} className="py-2 py-md-3">Vaccation Gear</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </section>
          </div>
        </div>
        <div className='col-12 col-sm-6 col-lg-4'>
          <div class="card rounded border-0">
            <img src={watchNTie} class="card-img-top rounded" alt="watch and tie" />
            <section class="card-body px-0">
              <figcaption class="figure-caption">Accessories</figcaption>
              <h4 style={{ fontWeight: 500 }} className="py-2 py-md-3">Men's Attire</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </section>
          </div>
        </div>
      </div>
      <div className='row g-0 justify-content-center align-items-center my-3 my-lg-4'>
        <div className='col text-center'>
          <button className='btn'>View all blog</button>
        </div>
      </div>
    </div >
  )
}

export default TheLatestOnTheBlog