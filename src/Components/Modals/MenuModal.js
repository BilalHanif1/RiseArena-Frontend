import React from 'react';
// REACT ROUTER DOM
import { Link } from "react-router-dom";
// REACT-BOOTSTRAP
import Modal from 'react-bootstrap/Modal';
// ICONS
import { XCircle } from 'react-bootstrap-icons';

const MenuModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose} centered className='menuModal'>
      <Modal.Header>
        <div className='row g-0 w-100 justify-content-end align-items-center'>
          <div className='col-auto closeBtn'>
            <XCircle onClick={props.handleClose} />
          </div>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className='row g-0 menuOptions'>
          <ul>
            <Link to={"/"} style={{ textDecoration: "none", color: "#444" }}>
              <li>The blog</li>
            </Link>
            <Link to={"/"} style={{ textDecoration: "none", color: "#444" }}>
              <li>Visit the shop</li>
            </Link>
            <Link to={"/"} style={{ textDecoration: "none", color: "#444" }}>
              <li>About</li>
            </Link>
            <Link to={"/"} style={{ textDecoration: "none", color: "#444" }}>
              <li>Contact</li>
            </Link>
            <Link to={"/tiktoklately"} style={{ textDecoration: "none", color: "#444" }}>
              <li>Tiktok</li>
            </Link>
            <Link to={"/instagram"} style={{ textDecoration: "none", color: "#444" }}>
              <li>Instagram</li>
            </Link>
            <Link to={"/liketoknowit"} style={{ textDecoration: "none", color: "#444" }}>
              <li>Liketoknowit</li>
            </Link>
          </ul>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default MenuModal