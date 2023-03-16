// REACT
import React from 'react';
// COMPONENTS
import HeaderHome from '../Components/Headers/HeaderHome';
import HomeBanner from '../Components/Banners/HomeBanner';

const HomeScreen = () => {
  return (
    <div>
      <HeaderHome />
      <HomeBanner />
      <h1>This is Home Screen</h1>
    </div>
  )
}

export default HomeScreen