import React from 'react';
import { Link } from 'react-router-dom';
// ICONS
import { Search } from 'react-bootstrap-icons';
// COMPONENTS
import HeaderHome from '../Components/Headers/HeaderHome';
import Categories from '../Components/Categories/Categories';
import InboxSubscription from '../Components/Subscriptions/InboxSubscription';
import Footer from '../Components/Footer/Footer';
// IMAGES
import sofa from "../Assets/img/black-sofa.jpg";
import VaccationGear from "../Assets/img/vaccation-gear.jpg";
import watchNTie from "../Assets/img/watch-n-tie.jpg";
import manSitting from "../Assets/img/1.jpg";
import redShirt from "../Assets/img/2.jpg";
import shoppingLady from "../Assets/img/3.jpg";
import watch from "../Assets/img/4.jpg";
import sunGlasses from "../Assets/img/5.jpg";
import guyInCoat from "../Assets/img/6.jpg";

const Blog = () => {
  return (
    <div>
      <div className='primaryWrapper'>
        {/* Header */}
        <HeaderHome />
        {/* Links */}
        <div className='overflow-hidden mt-3 mt-lg-4'>
          <div className='row g-3 justify-content-center align-items-center'>
            <div className='col-auto'>
              <Link to={"/"} className="socialCardLinks" >
                <p className='mb-0'>The Blog</p>
              </Link>
            </div>
            <div className='col-auto'>
              <Link to={"/"} className="socialCardLinks" >
                <p className='mb-0'>Visit The Shop</p>
              </Link>
            </div>
          </div>
        </div>
        {/* Categories */}
        <div className='mt-4 mt-lg-5 pb-3 pb-lg-5'>
          <div>
            <Categories heading={"Find Blog Of Your Interest"} description={"Lorem ipsum dolor sit amet consectetur. Neque nulla eget lobortis pellentesque commodo vitae libero massa. Eget et neque condimentum nulla. Ipsum habitasse."} />
          </div>
        </div>
        {/* Search */}
        <div className='row g-0 justify-content-center align-items-center mt-4 mt-lg-5 pb-3 pb-lg-5'>
          <div className='col-12 col-sm-6 col-lg-4'>
            <div className='searchWrapper'>
              <input type="text" placeholder='What are you looking for?' />
              <span className='searchIcon'>
                <Search />
              </span>
            </div>
          </div>
        </div>
        {/* The Blog */}
        <div className='overflow-hidden latestOnBlog mt-4 mt-lg-5 pb-3 pb-lg-5'>
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
            <div className='col-12 col-sm-6 col-lg-4'>
              <div class="card rounded border-0">
                <img src={manSitting} class="card-img-top rounded" alt="man sitting in suit" />
                <section class="card-body px-0">
                  <figcaption class="figure-caption">Life Style</figcaption>
                  <h4 style={{ fontWeight: 500 }} className="py-2 py-md-3">Suited Man</h4>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </section>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-lg-4'>
              <div class="card rounded border-0">
                <img src={redShirt} class="card-img-top rounded" alt="man in red shirt" />
                <section class="card-body px-0">
                  <figcaption class="figure-caption">Accessories</figcaption>
                  <h4 style={{ fontWeight: 500 }} className="py-2 py-md-3">Red Man</h4>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </section>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-lg-4'>
              <div class="card rounded border-0">
                <img src={shoppingLady} class="card-img-top rounded" alt="shopping lady" />
                <section class="card-body px-0">
                  <figcaption class="figure-caption">Furniture</figcaption>
                  <h4 style={{ fontWeight: 500 }} className="py-2 py-md-3">Shopping Lady</h4>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </section>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-lg-4'>
              <div class="card rounded border-0">
                <img src={sunGlasses} class="card-img-top rounded" alt="sunglasses" />
                <section class="card-body px-0">
                  <figcaption class="figure-caption">Life Style</figcaption>
                  <h4 style={{ fontWeight: 500 }} className="py-2 py-md-3">Ploarized Sunglasses</h4>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </section>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-lg-4'>
              <div class="card rounded border-0">
                <img src={watch} class="card-img-top rounded" alt="wrist watch" />
                <section class="card-body px-0">
                  <figcaption class="figure-caption">Accessories</figcaption>
                  <h4 style={{ fontWeight: 500 }} className="py-2 py-md-3">Omega Watch</h4>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </section>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-lg-4'>
              <div class="card rounded border-0">
                <img src={guyInCoat} class="card-img-top rounded" alt="guy in coat" />
                <section class="card-body px-0">
                  <figcaption class="figure-caption">Furniture</figcaption>
                  <h4 style={{ fontWeight: 500 }} className="py-2 py-md-3">Skin Coat</h4>
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
        </div>
        {/* Subscription */}
        <div className="mt-4 mt-lg-5 pb-3 pb-lg-5">
          <InboxSubscription />
        </div>
      </div>
      {/* Footer */}
      <div className='mt-4 mt-lg-5 '>
        <Footer />
      </div>
    </div>
  )
}

export default Blog