// REACT
import React, { useState } from 'react';
// COMPONENTS
import HeaderHome from '../Components/Headers/HeaderHome';
import HomeBanner from '../Components/Banners/HomeBanner';
import Categories from '../Components/Categories/Categories';
import CurrentFavorites from '../Components/Featured/CurrentFavorites';
import InboxSubscription from '../Components/Subscriptions/InboxSubscription';
import TheLatestOnTheBlog from '../Components/Featured/TheLatestOnTheBlog';
import TikTokShortsLately from '../Components/SocialMedia/TikTokShortsLately';
import Footer from '../Components/Footer/Footer';
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
const HomeScreen = () => {
  // States
  const [catHeading, setCatHeading] = useState("Shop my Amazon Storefront");
  const [catDescription, setCatDescription] = useState("Lorem ipsum dolor sit amet consectetur. Neque nulla eget lobortis pellentesque commodo vitae libero massa. Eget et neque condimentum nulla. Ipsum habitasse.");


  // Content
  return (
    <div>
      {/* Header */}
      <div className='primaryWrapper'>
        <HeaderHome />
      </div>
      {/* Banner */}
      <HomeBanner />
      {/* Categories */}
      <div className='primaryWrapper px-md-3'>
        <Categories heading={catHeading} description={catDescription} />
      </div>
      {/* Current Favorites */}
      <div className='primaryWrapper my-3 py-3 my-md-4 py-md-4 my-xl-5 py-xl-5'>
        <CurrentFavorites heading={null} description={null} />
      </div>
      {/* The Snapshots */}
      <div className='overflow-hidden primaryWrapper my-4 my-lg-5 pb-3 pb-lg-5 latestOnBlog'>
        <div className='row g-0 justify-content-center align-items-center'>
          <section className='col-12 col-md-9 col-lg-8 col-xl-7 col-xxl-5 text-center'>
            <h3 className='fw-bold'>The Snapshots</h3>
            <p className='mt-3 mt-lg-4'>Effortlessly take your first steps in EOS photography and enjoy great picture quality
              with countless creative opportunities.</p>
          </section>
        </div>
        <div className='row g-0 justify-content-center align-items-center pt-3 pt-md-4 pt-xl-5 catTabs'>
          <div className='col-auto'>
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <p class="nav-link active">Life Style</p>
              </li>
              <li class="nav-item">
                <p class="nav-link">Weekly Finds</p>
              </li>
              <li class="nav-item">
                <p class="nav-link">Organization</p>
              </li>
              <li class="nav-item">
                <p class="nav-link">Home</p>
              </li>
              <li class="nav-item">
                <p class="nav-link">Lifestyle</p>
              </li>
              <li class="nav-item">
                <p class="nav-link" >Beauty</p>
              </li>
            </ul>
          </div>
        </div>
        {/* The latest find */}
        <div className='overflow-hidden'>
          <div className='row g-3 justify-content-center align-items-center mt-4 mt-lg-5'>
            <div className='col-6 col-md-4 col-lg-3'>
              <div class="card rounded border-0 shopCard">
                <img src={camera} class="card-img-top rounded" alt="camera" />
              </div>
              <div className='col-12 shopBtn text-center mt-3'>
                <button className='btn w-100'>shop now</button>
              </div>
            </div>
            <div className='col-6 col-md-4 col-lg-3'>
              <div class="card rounded border-0 shopCard">
                <img src={topView} class="card-img-top rounded" alt="product in shop" />
              </div>
              <div className='col-12 shopBtn text-center mt-3'>
                <button className='btn w-100'>shop now</button>
              </div>
            </div>
            <div className='col-6 col-md-4 col-lg-3'>
              <div class="card rounded border-0 shopCard">
                <img src={decor} class="card-img-top rounded" alt="home decor" />
              </div>
              <div className='col-12 shopBtn text-center mt-3'>
                <button className='btn w-100'>shop now</button>
              </div>
            </div>
            <div className='col-6 col-md-4 col-lg-3'>
              <div class="card rounded border-0 shopCard">
                <img src={sweatShirt} class="card-img-top rounded" alt="sweat shirt" />
              </div>
              <div className='col-12 shopBtn text-center mt-3'>
                <button className='btn w-100'>shop now</button>
              </div>
            </div>
            <div className='col-6 col-md-4 col-lg-3'>
              <div class="card rounded border-0 shopCard">
                <img src={makeupSet} class="card-img-top rounded" alt="make up kit" />
              </div>
              <div className='col-12 shopBtn text-center mt-3'>
                <button className='btn w-100'>shop now</button>
              </div>
            </div>
            <div className='col-6 col-md-4 col-lg-3'>
              <div class="card rounded border-0 shopCard">
                <img src={orangeFlavored} class="card-img-top rounded" alt="product of orange" />
              </div>
              <div className='col-12 shopBtn text-center mt-3'>
                <button className='btn w-100'>shop now</button>
              </div>
            </div>
            <div className='col-6 col-md-4 col-lg-3'>
              <div class="card rounded border-0 shopCard">
                <img src={flowersPink} class="card-img-top rounded" alt="home decor" />
              </div>
              <div className='col-12 shopBtn text-center mt-3'>
                <button className='btn w-100'>shop now</button>
              </div>
            </div>
            <div className='col-6 col-md-4 col-lg-3'>
              <div class="card rounded border-0 shopCard">
                <img src={shoeNike} class="card-img-top rounded" alt="nike shoe" />
              </div>
              <div className='col-12 shopBtn text-center mt-3'>
                <button className='btn w-100'>shop now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Inbox Subscription */}
      <div className='primaryWrapper my-3 py-3 my-md-4 py-md-4 my-xl-5 py-xl-5'>
        <InboxSubscription />
      </div>
      {/* The latest on the blog */}
      <div className='primaryWrapper'>
        <TheLatestOnTheBlog />
      </div>
      {/* Tik Tok Shorts Lately */}
      <div className='my-4 my-lg-5 pb-3 pb-lg-5 overflow-hidden'>
        <TikTokShortsLately />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default HomeScreen