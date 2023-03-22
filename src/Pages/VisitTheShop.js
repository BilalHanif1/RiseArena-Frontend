import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// COMPONENTS
import HeaderHome from '../Components/Headers/HeaderHome';
import TikTokShortsLately from '../Components/SocialMedia/TikTokShortsLately';
import Categories from '../Components/Categories/Categories';
import CurrentFavorites from '../Components/Featured/CurrentFavorites.js';
import InboxSubscription from '../Components/Subscriptions/InboxSubscription';
import Footer from '../Components/Footer/Footer';
// ICONS
import { Search } from 'react-bootstrap-icons';
// IMAGES
import camera from "../Assets/img/shopImage1.jpg";
import topView from "../Assets/img/shopImage2.jpg";
import decor from "../Assets/img/shopImage3.jpg";
import sweatShirt from "../Assets/img/shopImage4.jpg";
import makeupSet from "../Assets/img/shopImage5.jpg";
import orangeFlavored from "../Assets/img/shopImage6.jpg";
import flowersPink from "../Assets/img/shopImage7.jpg";
import shoeNike from "../Assets/img/shopImage8.jpg";
import watch from "../Assets/img/4.jpg";
import glasses from "../Assets/img/5.jpg";
import accessories from "../Assets/img/accessories.jpg";


// COMPONENT FUNCTION
const VisitTheShop = () => {
  // States
  const [catHeading, setCatHeading] = useState("Looking For Something");
  const [catDescription, setCatDescription] = useState("Lorem ipsum dolor sit amet consectetur. Neque nulla eget lobortis pellentesque commodo vitae libero massa. Eget et neque condimentum nulla. Ipsum habitasse.");

  // Content
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
        <div>
          <Categories heading={catHeading} description={catDescription} />
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
        {/* The latest find */}
        <div className='overflow-hidden'>
          <div className='row g-3 justify-content-center align-items-center mt-4 mt-lg-5 pb-3 pb-lg-5'>
            <div className='col-6 col-md-4 col-lg-3'>
              <div class="card rounded border-0 shopCard">
                <img src={camera} class="card-img-top rounded" alt="camera" />
              </div>
            </div>
            <div className='col-6 col-md-4 col-lg-3'>
              <div class="card rounded border-0 shopCard">
                <img src={topView} class="card-img-top rounded" alt="product in shop" />
              </div>
            </div>
            <div className='col-6 col-md-4 col-lg-3'>
              <div class="card rounded border-0 shopCard">
                <img src={decor} class="card-img-top rounded" alt="home decor" />
              </div>
            </div>
            <div className='col-6 col-md-4 col-lg-3'>
              <div class="card rounded border-0 shopCard">
                <img src={sweatShirt} class="card-img-top rounded" alt="sweat shirt" />
              </div>
            </div>
            <div className='col-6 col-md-4 col-lg-3'>
              <div class="card rounded border-0 shopCard">
                <img src={makeupSet} class="card-img-top rounded" alt="make up kit" />
              </div>
            </div>
            <div className='col-6 col-md-4 col-lg-3'>
              <div class="card rounded border-0 shopCard">
                <img src={orangeFlavored} class="card-img-top rounded" alt="product of orange" />
              </div>
            </div>
            <div className='col-6 col-md-4 col-lg-3'>
              <div class="card rounded border-0 shopCard">
                <img src={flowersPink} class="card-img-top rounded" alt="home decor" />
              </div>
            </div>
            <div className='col-6 col-md-4 col-lg-3'>
              <div class="card rounded border-0 shopCard">
                <img src={shoeNike} class="card-img-top rounded" alt="nike shoe" />
              </div>
            </div>
            <div className='col-12 shopBtn text-center mt-3 mt-lg-4'>
              <button className='btn'>shop now</button>
            </div>
          </div>
        </div>
      </div>
      {/* Tik Tok Shorts Lately */}
      <div className='mt-4 mt-lg-5 pb-3 pb-lg-5'>
        <TikTokShortsLately />
      </div>
      <div className='primaryWrapper'>
        {/* Current Amazon Fav */}
        <div className='mt-4 mt-lg-5 pb-3 pb-lg-5'>
          <CurrentFavorites heading={'Current Amazon Favorites'} description={'Lorem ipsum dolor sit amet consectetur. Massa at malesuada urna arcu a. Nunc viverra arcu ut mauris diam placerat. Aliquam sed amet augue egestas.'} />
        </div>
        {/* Insta Lately */}
        <div className='overflow-hidden mb-4 mb-lg-5 pb-3 pb-lg-5 latestOnBlog'>
          <div className='row g-0 justify-content-center mt-4 mt-lg-5 mb-3 mb-lg-4'>
            <section className='col-12 col-md-9 col-lg-8 col-xl-7 col-xxl-5 text-center'>
              <h3 className='fw-bold'>Insta Lately</h3>
              <p className='mt-3 mt-lg-4'>Effortlessly take your first steps in EOS photography and enjoy great picture quality
                with countless creative opportunities.</p>
            </section>
          </div>
          <div className='row g-4 justify-content-center align-items-center'>
            <div className='col-12 col-sm-6 col-lg-4'>
              <div class="card rounded border-0">
                <img src={watch} class="card-img-top rounded" alt="men's watch" />
              </div>
            </div>
            <div className='col-12 col-sm-6 col-lg-4'>
              <div class="card rounded border-0">
                <img src={glasses} class="card-img-top rounded" alt="metal frame sunglasses" />
              </div>
            </div>
            <div className='col-12 col-sm-6 col-lg-4'>
              <div class="card rounded border-0">
                <img src={accessories} class="card-img-top rounded" alt="accessories" />
              </div>
            </div>
          </div>
          <div className='row g-0 justify-content-center align-items-center my-3 my-lg-4'>
            <div className='col text-center'>
              <button className='btn'>View all</button>
            </div>
          </div>
        </div >
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

export default VisitTheShop