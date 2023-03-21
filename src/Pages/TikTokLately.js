import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// COMPONENTS
import HeaderHome from '../Components/Headers/HeaderHome';
import SocialMediaCards from '../Components/SocialMedia/SocialMediaCards';
import Categories from '../Components/Categories/Categories';
import TheLatestOnTheBlog from '../Components/Featured/TheLatestOnTheBlog';
import InboxSubscription from '../Components/Subscriptions/InboxSubscription';
import Footer from '../Components/Footer/Footer';

const TikTokLately = () => {
  // States
  const [socialHeading, setSocialHeading] = useState("Tik tok lately");
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
        <div className='overflow-hidden'>
          <div className='row g-3 justify-content-center align-items-center'>
            <div className='col-auto'>
              <Link to={"/"} className="socialCardLinks" >
                <p>The Blog</p>
              </Link>
            </div>
            <div className='col-auto'>
              <Link to={"/"} className="socialCardLinks" >
                <p>Visit The Shop</p>
              </Link>
            </div>
          </div>
        </div>
        {/* Social Media Cards */}
        <SocialMediaCards heading={socialHeading} description={socialDescription} />
        {/* Categories */}
        <div>
          <Categories heading={catHeading} description={catDescription} />
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

export default TikTokLately