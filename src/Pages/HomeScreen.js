// REACT
import React from 'react';
// COMPONENTS
import HeaderHome from '../Components/Headers/HeaderHome';
import HomeBanner from '../Components/Banners/HomeBanner';

const HomeScreen = () => {
  return (
    <div>
      <div className='primaryWrapper'>
        <HeaderHome />
      </div>
      <HomeBanner />
      <div className='bg-primary primaryWrapper'>
        <h1>This is Home Screen</h1>
      </div>
    </div>
  )
}

export default HomeScreen