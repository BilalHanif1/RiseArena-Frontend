// REACT
import React, { useState } from 'react';
// COMPONENTS
import HeaderHome from '../Components/Headers/HeaderHome';
import HomeBanner from '../Components/Banners/HomeBanner';
import Categories from '../Components/Categories/Categories';
import CurrentFavorites from '../Components/Featured/CurrentFavorites';
import InboxSubscription from '../Components/Subscriptions/InboxSubscription';
import TheLatestOnTheBlog from '../Components/Featured/TheLatestOnTheBlog';
import Footer from '../Components/Footer/Footer';

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
      {/* Inbox Subscription */}
      <div className='primaryWrapper my-3 py-3 my-md-4 py-md-4 my-xl-5 py-xl-5'>
        <InboxSubscription />
      </div>
      {/* The latest on the blog */}
      <div className='primaryWrapper'>
        <TheLatestOnTheBlog />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default HomeScreen