import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// COMPONENTS
import HeaderHome from '../Components/Headers/HeaderHome';
import SocialMediaCards from '../Components/SocialMedia/SocialMediaCards';
import TheLatestOnTheBlog from '../Components/Featured/TheLatestOnTheBlog';
import InboxSubscription from '../Components/Subscriptions/InboxSubscription';
import Footer from '../Components/Footer/Footer';

const LikeToKnowIt = () => {
  // States
  const [socialHeading, setSocialHeading] = useState("Instagram");
  const [socialDescription, setSocialDescription] = useState("Lorem ipsum dolor sit amet consectetur. Neque nulla eget lobortis pellentesque commodo vitae libero massa. Eget et neque condimentum nulla. Ipsum habitasse.");
  const [catHeading, setCatHeading] = useState("Shop my Amazon Storefront");
  const [catDescription, setCatDescription] = useState("Lorem ipsum dolor sit amet consectetur. Neque nulla eget lobortis pellentesque commodo vitae libero massa. Eget et neque condimentum nulla. Ipsum habitasse.");

  // Content
  return (
    <div>
      <div className='primaryWrapper socialCardWrapper'>
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
        {/* Social Media Cards */}
        <SocialMediaCards heading={socialHeading} description={socialDescription} />
      </div>
      {/* Want to see more */}
      <div className='mt-4 mt-lg-5 py-3 py-lg-5'>
        <div className='row g-0 justify-content-center align-items-center wantToSeeWrapper py-5'>
          <div className='col-12 collectionRedirect text-center'>
            <h2 className='fw-bold'>Want To See More?</h2>
            <div className='row g-0 justify-content-center align-items-center my-3 my-lg-4'>
              <div className='col-auto'>
                <button className='btn'>keep watching</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='primaryWrapper socialCardWrapper'>
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

export default LikeToKnowIt