import React from 'react';
// BOOSTRAP ICONS
import { GeoAlt, Telephone, SendFill } from 'react-bootstrap-icons';
// LOGOS
import facebook from "../../Assets/img/facebook-color.svg";
import instagram from "../../Assets/img/instagram-1.svg";
import paypal from "../../Assets/img/paypal.png";
import masterCard from "../../Assets/img/mastercard.png";
import visaCard from "../../Assets/img/visa.png";


// COMPONENT FUNCTION
const Footer = () => {
  return (
    <>
      <div className='footerContentWrapper'>
        <div className='primaryWrapper py-3 py-md-4 py-lg-5'>
          <div className='row g-0 justify-content-md-between justify-content-center my-3 my-md-4 my-lg-5'>
            {/* Contact Us */}
            <section className='col-12 col-md-6 col-lg-4 col-xl-3 footerHeading'>
              <h6>Contact Us</h6>
              <ul>
                <li><GeoAlt /> 4834 Lilac Lane Vidalia, GA 30474</li>
                <li><Telephone /> 299-498-9277</li>
              </ul>
            </section>
            {/* Quick Links */}
            <section className='col-12 col-md-6 col-lg-4 col-xl-2 mt-4 mt-md-0 footerHeading'>
              <h6>Quick Links</h6>
              <ul>
                <li>Home</li>
                <li>Product</li>
                <li>Blog</li>
                <li>Pricing</li>
              </ul>
            </section>
            {/* About */}
            <section className='col-12 col-md-6 col-lg-4 col-xl-3 mt-4 mt-lg-0 footerHeading'>
              <h6>About</h6>
              <ul>
                <li>Delivery Information</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Order & Return</li>
              </ul>
            </section>
            {/* Follow Us */}
            <section className='col-12 col-md-6 col-lg-12 col-xl-4 mt-4 mt-xl-0 footerHeading'>
              <h6>Follow Us</h6>
              <div className='footerSocialLogos'>
                <img src={facebook} alt='facebook logo' />
                <img src={instagram} alt='facebook logo' />
              </div>
              <h6>Newsletter</h6>
              <div className='footerNewsletter row g-0 align-items-center justify-content-center justify-content-md-start'>
                <div className='col-7 col-sm-4 col-md-7 col-lg-3 col-xl-7'>
                  <input type="email" placeholder='Enter Your Email' />
                </div>
                <div className='col-auto'>
                  <button className='btn'>SUBMIT <span className='px-1'><SendFill /></span></button>
                </div>
              </div>
              <div className='footerPaymentGateways row g-0 align-items-center justify-content-center justify-content-md-start'>
                <div className='col-auto'>
                  <img src={paypal} alt="paypal" className='paypal' />
                </div>
                <div className='col-auto'>
                  <img src={masterCard} alt="master card" />
                </div>
                <div className='col-auto'>
                  <img src={visaCard} alt="visa card" className='visa' />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className='footerRibbon'>
        <div className='row g-0 justify-content-center align-items-center'>
          <p className='m-0 text-center text-white'>&copy; 2023 Rise Arena. All Rights Reserved.</p>
        </div>
      </div>
    </>
  )
}

export default Footer