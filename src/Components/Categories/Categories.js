import React from 'react'
import kitchen from "../../Assets/img/kitchen.jpg";
import organization from "../../Assets/img/organization.jpg";
import shoppingGuide from "../../Assets/img/shopping-guide.jpg";
import diy from "../../Assets/img/diy.jpg";
import amazonBox from "../../Assets/img/amazon-box.jpg";
import accessories from "../../Assets/img/accessories.jpg";

const Categories = (props) => {
  return (
    <div>
      <div className='row g-0 justify-content-center my-4 my-lg-5'>
        <section className='col-12 col-md-10 col-lg-8 col-xl-7 text-center'>
          <h3 className='fw-bold'>{props.heading}</h3>
          <p className='mt-3 mt-lg-4'>{props.description}</p>
        </section>
      </div>
      <div className='row g-0 justify-content-between justify-content-sm-around align-items-center mt-4 mt-lg-5'>
        <div className='col-4 col-sm-2 catFigures text-center'>
          <figure class="figure">
            <img src={shoppingGuide} class="figure-img img-fluid rounded-circle" alt="shopping guide" />
            <figcaption class="figure-caption text-center text-body">Shopping guides</figcaption>
          </figure>
        </div>
        <div className='col-4 col-sm-2 catFigures text-center'>
          <figure class="figure">
            <img src={organization} class="figure-img img-fluid rounded-circle" alt="organization" />
            <figcaption class="figure-caption text-center text-body">Organization</figcaption>
          </figure>
        </div>
        <div className='col-4 col-sm-2 catFigures text-center'>
          <figure class="figure">
            <img src={kitchen} class="figure-img img-fluid rounded-circle" alt="kitchen" />
            <figcaption class="figure-caption text-center text-body">Kitchen</figcaption>
          </figure>
        </div>
        <div className='col-4 col-sm-2 catFigures text-center'>
          <figure class="figure">
            <img src={amazonBox} class="figure-img img-fluid rounded-circle" alt="amazon box" />
            <figcaption class="figure-caption text-center text-body">Amazon</figcaption>
          </figure>
        </div>
        <div className='col-4 col-sm-2 catFigures text-center'>
          <figure class="figure">
            <img src={diy} class="figure-img img-fluid rounded-circle" alt="do it yourself" />
            <figcaption class="figure-caption text-center text-body">DIY's</figcaption>
          </figure>
        </div>
        <div className='col-4 col-sm-2 catFigures text-center'>
          <figure class="figure">
            <img src={accessories} class="figure-img img-fluid rounded-circle" alt="accessories" />
            <figcaption class="figure-caption text-center text-body">Accessories</figcaption>
          </figure>
        </div>
      </div>
    </div>
  )
}

export default Categories