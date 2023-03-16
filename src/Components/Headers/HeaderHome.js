// REACT
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// ICONS
import { Search, List } from 'react-bootstrap-icons';
// LOGO
import logo from "../../Assets/img/logo.svg"
// COMPONENTS
import MenuModal from '../Modals/MenuModal';

// COMPONENT FUNCTION
const HeaderHome = () => {
  // States
  const [openMenuModal, setOpenMenuModal] = useState(false);

  // Handlers
  const handleToggleMenuModal = () => {
    console.log("modal was interacted");
    setOpenMenuModal(!openMenuModal);
  }

  // Content
  return (
    <>
      <nav>
        <div className='row g-0 justify-content-between align-items-center navContainer'>
          <div className='col-auto col-sm-7 pe-sm-5 pe-md-0 col-md-6 text-end'>
            <Link to="/">
              <img src={logo} alt="Rise Arena Logo" className='logo' />
            </Link>
          </div>
          <div className='col-auto'>
            {/* <input placeholder='search' /> */}
            <span className='headerSearchBtn'><Search /></span>
            <span className='headerFriesMenu' onClick={handleToggleMenuModal}><List /></span>
          </div>
        </div>
      </nav>
      <MenuModal handleClose={handleToggleMenuModal} show={openMenuModal} />
    </>
  )
}

export default HeaderHome