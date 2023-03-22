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


// COMPONENT FUNCTION
const About = () => {
  return (
    <div className='position-relative'>
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
      <div className='AboutMainRibbon mt-4 mt-lg-5 pb-3 about'>
        <div className='row g-0 justify-content-center align-items-center'>
          <div className='aboutImages'>
            <img src={youngGirl} alt='girl with glasses' className='bio' />
            <img src={trendyDress} alt='girl with glasses' className='bioSecondary' />
          </div>
        </div>
      </div>
      <div className='primaryWrapper mt-4 mt-lg-5 pb-3'>
        <div className='row g-0 justify-content-center align-items-center  about'>
          <section className='col-12 col-md-9 col-lg-8 col-xl-7 col-xxl-5 text-center px-lg-5 px-xl-0'>
            <h3 className='fw-bold'>I am Anna</h3>
            <p className='mt-3 mt-lg-4' style={{ textAlign: "justify" }}>Lorem ipsum dolor sit. Neque nulla eget lobortis pellentesque commodo vitae libero massa amet consectetur. Neque nulla eget lobortis pellentesque commodo vitae libero massa. Eget et neque condimentum nulla. Ipsum habitasse.Lorem ipsum dolor sit amet consectetur. Neque nulla eget lobortis pellentesque commodo vitae libero massa. Eget et neque condimentum nulla. Ipsum habitasse.Lorem ipsum dolor sit amet consectetur. Neque nulla eget lobortis pellentesque commodo vitae libero massa. Eget
              et neque condimentum nulla. Ipsum habitasse.</p>
          </section>
        </div>
        <div className='row g-0 justify-content-center align-items-center position-relative mt-4 mt-lg-5 pb-3'>
          <div className='col-12 col-lg-6 aboutMeWrapper'>
            <div className='aboutImages'>
              <img src={girlWithGlasses} alt='girl with glasses' className='aboutMe' />
              <img src={pinkBag} alt='a pink handbag' className='aboutMeSecondary' />
            </div>
          </div>
          <div className='col-12 col-lg-6 aboutMePara px-lg-5 px-xl-0'>
            <h3 className='fw-bold'>About Me</h3>
            <p className='mt-3 mt-lg-4'>Lorem ipsum dolor sit amet consectetur. Neque nulla eget lobortis pellentesque commodo vitae libero massa. Eget et neque condimentum nulla. Ipsum habitasse.Lorem ipsum dolor sit amet consectetur. Neque nulla eget lobortis pellentesque commodo vitae libero massa. Eget et neque condimentum nulla. Ipsum habitasse.Lorem ipsum dolor sit amet consectetur. Neque nulla eget lobortis pellentesque commodo vitae libero massa. Eget
              et neque condimentum nulla. Ipsum habitasse.</p>
          </div>
        </div>
      </div>
      <div className='primaryWrapper mt-4 mt-lg-5 pb-3 position-relative'>
        <div className='myStoryWrapper'>
          <div className='row g-0 justify-content-center align-items-center position-relative mt-4 mt-lg-5 pb-3'>
            <div className='col-12 col-lg-6 aboutMePara px-lg-5 px-xl-0'>
              <h3 className='fw-bold'>My Story</h3>
              <p className='mt-3 mt-lg-4'>Lorem ipsum dolor sit amet consectetur. Neque nulla eget lobortis pellentesque commodo vitae libero massa. Eget et neque condimentum nulla. Ipsum habitasse.Lorem ipsum dolor sit amet consectetur. Neque nulla eget lobortis pellentesque commodo vitae libero massa. Eget et neque condimentum nulla. Ipsum habitasse.Lorem ipsum dolor sit amet consectetur. Neque nulla eget lobortis pellentesque commodo vitae libero massa. Eget
                et neque condimentum nulla. Ipsum habitasse.</p>
            </div>
            <div className='col-12 col-lg-6 aboutMeWrapper'>
              <div className='aboutImages'>
                <img src={dp} alt='guy with glasses' className='aboutMe' />
                <img src={trendyBag} alt='trenady handbag' className='aboutMeSecondary' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='primaryWrapper mt-4 mt-lg-5 pb-3 position-relative'>
        <div className='preTabWrapper'>
          <div className='row g-0 justify-content-center mt-4 mt-lg-5 mb-3 mb-lg-4'>
            <section className='col-12 col-md-9 col-lg-8 col-xl-7 col-xxl-5 text-center'>
              <h3 className='fw-bold'>Looking For Something</h3>
              <p className='mt-3 mt-lg-4'>Effortlessly take your first steps in EOS photography and enjoy great picture quality
                with countless creative opportunities.</p>
            </section>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className='aboutFooter'>
        <Footer />
      </div>
    </div >
  )
}

export default About