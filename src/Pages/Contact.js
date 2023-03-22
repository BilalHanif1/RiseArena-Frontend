import React from 'react';
import { Link } from 'react-router-dom';
// COMPONENTS
import HeaderHome from '../Components/Headers/HeaderHome';
import TheLatestOnTheBlog from '../Components/Featured/TheLatestOnTheBlog';
import InboxSubscription from '../Components/Subscriptions/InboxSubscription';
import Footer from '../Components/Footer/Footer';
// IMAGES
import dp from "../Assets/img/dp.jpg";

// COMPONENT FUNCTION
const Contact = () => {
  return (
    <div>
      <div className='primaryWrapper letsConnect'>
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
            <h3 className='fw-bold'>Let's Connect</h3>
            <p className='mt-3 mt-lg-4'>Effortlessly take your first steps in EOS photography and enjoy great picture quality
              with countless creative opportunities.</p>
          </section>
        </div>
        {/* Display Picture */}
        <div className='row g-0 justify-content-center align-items-center contactDpWrapper mb-3 mb-lg-5'>
          <div className='rounded contactDp'>
            <img src={dp} class="rounded" alt="contact page user" />
            <ul>
              <li>name@email.com</li>
              <li>(+33)7 00 55 54 79</li>
            </ul>
          </div>
        </div>
        {/* The Latest on The Blog */}
        <div>
          <TheLatestOnTheBlog />
        </div>
        {/* Inbox Subscription */}
        <div className='mb-3 pb-3 mb-md-4 pb-md-4 mb-xl-5 pb-xl-5'>
          <InboxSubscription />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Contact