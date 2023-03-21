import React from 'react';
import clothingStore from "../../Assets/img/clothing-store.jpg";
import elegantFurniture from "../../Assets/img/elegant-furniture.jpg";
import roomDecor from "../../Assets/img/room-decor.jpg";

const CurrentFavorites = (props) => {
  return (
    <div>
      <div className='row g-0 justify-content-center mb-4 mb-lg-5'>
        <section className='col-12 col-md-10 col-lg-8 col-xl-7 text-center'>
          {props.heading !== null ?
            (<h3 className='fw-bold'>{props.heading}</h3>)
            : null}
          {props.description !== null ?
            (<p className='mt-3 mt-lg-4'>{props.description}</p>)
            : null}
        </section>
      </div>
      <div className='row g-4 justify-content-center align-items-center currentFavorites'>
        <div className='col-12 col-sm-6 col-lg-4'>
          <div class="card rounded border-0 position-relative">
            <img src={clothingStore} class="card-img-top rounded" alt="black sofa" />
            <div className='cfBackdrop'></div>
            <section class="p-3">
              <figcaption class="figure-caption text-white">New Arrivals</figcaption>
              <h4 style={{ fontWeight: 500 }} className="py-2 py-sm-1 mb-1 mb-md-2 text-white">Clothing Store</h4>
              <button className='btn'>shop now</button>
            </section>
          </div>
        </div>
        <div className='col-12 col-sm-6 col-lg-4'>
          <div class="card rounded border-0 position-relative">
            <img src={elegantFurniture} class="card-img-top rounded" alt="vaccation gear" />
            <div className='cfBackdrop'></div>
            <section class="p-3">
              <figcaption class="figure-caption text-white">Discover</figcaption>
              <h4 style={{ fontWeight: 500 }} className="py-2 py-sm-1 mb-1 mb-md-2 text-white">Elegant Furniture</h4>
              <button className='btn'>start buying</button>
            </section>
          </div>
        </div>
        <div className='col-12 col-sm-6 col-lg-4'>
          <div class="card rounded border-0 position-relative">
            <img src={roomDecor} class="card-img-top rounded" alt="watch and tie" />
            <div className='cfBackdrop'></div>
            <section class="p-3">
              <figcaption class="figure-caption text-white">Shop By Category</figcaption>
              <h4 style={{ fontWeight: 500 }} className="py-2 py-sm-1 mb-1 mb-md-2 text-white">Room Decor</h4>
              <button className='btn'>explore now</button>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentFavorites