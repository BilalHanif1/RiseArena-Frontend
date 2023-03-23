import React from 'react';
import { Link } from 'react-router-dom';
// COMPONENTS
import HeaderHome from '../Components/Headers/HeaderHome';
import TheLatestOnTheBlog from '../Components/Featured/TheLatestOnTheBlog';
import InboxSubscription from '../Components/Subscriptions/InboxSubscription';
import Footer from '../Components/Footer/Footer';
// IMAGES
import dp from "../Assets/img/dp.jpg";
import trendyBag from "../Assets/img/trendy-handbag.jpg"
import girlWithGlasses from "../Assets/img/girl-with-glasses.jpg";
import pinkBag from "../Assets/img/pink-handbag.jpg"
import trendyDress from "../Assets/img/trendy-girl-dress.jpg";
import youngGirl from "../Assets/img/young-girl.jpg";


const AboutPage = () => {
  return (
    <div>
      <div className='primaryWrapper about pb-3'>
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
        <div className='row g-0 justify-content-center mt-4 mt-lg-5 mb-3 mb-lg-4'>
          <section className='col-12 col-md-9 col-lg-8 col-xl-7 col-xxl-5 text-center'>
            <h3 className='fw-bold'>Looking For Something</h3>
            <p className='mt-3 mt-lg-4'>Effortlessly take your first steps in EOS photography and enjoy great picture quality
              with countless creative opportunities.</p>
          </section>
        </div>
      </div>
      <div className='aboutPageMainRibbon about px-4 px-lg-0'>
        <div className='row g-0 justify-content-center align-items-center'>
          <div className='col-auto text-center'>
            <img src={youngGirl} alt='girl with glasses' className='aboutBio aboutPageImagePrimary' />
            <img src={trendyDress} alt='girl with glasses' className='aboutBioSecondary aboutPageImageMinor' />
          </div>
        </div>
      </div>
      {/* I Am */}
      <div className='primaryWrapper'>
        <div className='row g-0 justify-content-center align-items-center'>
          <section className='col-12 col-xl-7 col-xxl-5 text-center'>
            <h3 className='fw-bold'>I am Anna</h3>
            <p className='mt-3 mt-lg-4' style={{ textAlign: "justify" }}>Lorem ipsum dolor sit. Neque nulla eget lobortis pellentesque commodo vitae libero massa amet consectetur. Neque nulla eget lobortis pellentesque commodo vitae libero massa. Eget et neque condimentum nulla. Ipsum habitasse.Lorem ipsum dolor sit amet consectetur. Neque nulla eget lobortis pellentesque commodo vitae libero massa. Eget et neque condimentum nulla. Ipsum habitasse.Lorem ipsum dolor sit amet consectetur. Neque nulla eget lobortis pellentesque commodo vitae libero massa. Egetet neque condimentum nulla. Ipsum habitasse.</p>
          </section>
        </div>
        {/* About Me */}
        <div className='row g-2 justify-content-center align-items-center mt-4 mt-lg-5 pb-3'>
          <div className='col-12 col-lg-6'>
            <img src={girlWithGlasses} alt='girl with glasses' className='aboutMePagePrimary aboutPageImagePrimary' />
            <img src={pinkBag} alt='a pink handbag' className='aboutMePageSecondary aboutPageImageMinor' />
          </div>
          <div className='col-12 col-lg-6 pe-xl-5'>
            <h3 className='fw-bold'>About Me</h3>
            <p className='mt-3 mt-lg-4'>Lorem ipsum dolor sit amet consectetur. Neque nulla eget lobortis pellentesque commodo vitae libero massa. Eget et neque condimentum nulla. Ipsum habitasse.Lorem ipsum dolor sit amet consectetur. Neque nulla eget lobortis pellentesque commodo vitae libero massa. Eget et neque condimentum nulla. Ipsum habitasse.Lorem ipsum dolor sit amet consectetur. Neque nulla eget lobortis pellentesque commodo vitae libero massa. Egetet neque condimentum nulla. Ipsum habitasse.</p>
          </div>
        </div>
        {/* My Story */}
        <div className='row g-2 justify-content-center align-items-center mt-4 mt-lg-5 pb-3'>
          <div className='col-12 col-lg-6 pe-xl-5 mt-5 mt-lg-0'>
            <h3 className='fw-bold'>My Story</h3>
            <p className='mt-3 mt-lg-4'>Lorem ipsum dolor sit amet consectetur. Neque nulla eget lobortis pellentesque commodo vitae libero massa. Eget et neque condimentum nulla. Ipsum habitasse.Lorem ipsum dolor sit amet consectetur. Neque nulla eget lobortis pellentesque commodo vitae libero massa. Eget et neque condimentum nulla. Ipsum habitasse.Lorem ipsum dolor sit amet consectetur. Neque nulla eget lobortis pellentesque commodo vitae libero massa. Egetet neque condimentum nulla. Ipsum habitasse.</p>
          </div>
          <div className='col-12 col-lg-6'>
            <img src={dp} alt='girl with glasses' className='aboutMyStoryPrimary aboutPageImagePrimary' />
            <img src={trendyBag} alt='a pink handbag' className='aboutMyStorySecondary aboutPageImageMinor' />
          </div>
        </div>
        {/* Get To Know Me */}
        <div className='overflow-hidden my-4 my-lg-5 pb-3 pb-lg-5 latestOnBlog'>
          <div className='row g-0 justify-content-center align-items-center'>
            <section className='col-12 col-md-9 col-lg-8 col-xl-7 col-xxl-5 text-center'>
              <h3 className='fw-bold'>Get To Know Me</h3>
              <p className='mt-3 mt-lg-4'>Lorem ipsum dolor sit amet consectetur. Neque nulla eget lobortis pellentesque commodo vitae libero massa. Egetet neque condimentum nulla. Ipsum habitasse.</p>
            </section>
          </div>
          <div className='row g-0 justify-content-center align-items-center pt-3 pt-md-4 pt-xl-5 catTabs'>
            <div className='col-auto'>
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <p class="nav-link active">My Favorites</p>
                </li>
                <li class="nav-item">
                  <p class="nav-link">My Hobbies</p>
                </li>
                <li class="nav-item">
                  <p class="nav-link">My Incom</p>
                </li>
                <li class="nav-item">
                  <p class="nav-link">My Favorite Place</p>
                </li>
                <li class="nav-item">
                  <p class="nav-link">My Beauty Hacks</p>
                </li>
              </ul>
            </div>
          </div>
          <div className='row g-0 justify-content-center align-items-center'>
            <div className='col-12 col-lg-8 knowMeDetails'>
              <p>Lorem ipsum dolor sit amet consectetur. Neque nulla eget lobortis pellentesque commodo vitae libero massa. Eget et neque condimentum nulla. Ipsum habitasse.Lorem ipsum dolor sit amet consectetur. Neque nulla eget lobortis pellentesque commodo vitae libero massa. Eget et neque condimentum nulla. Ipsum habitasse.Lorem ipsum dolor sit amet consectetur. Neque nulla eget lobortis pellentesque commodo vitae</p>
            </div>
          </div>
        </div>
        {/* The latest on the blog */}
        <div className='primaryWrapper'>
          <TheLatestOnTheBlog />
        </div>
        {/* Inbox Subscription */}
        <div className='my-4 my-lg-5 pb-3 pb-lg-5 overflow-hidden'>
          <InboxSubscription />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default AboutPage