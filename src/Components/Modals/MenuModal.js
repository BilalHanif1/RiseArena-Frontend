import React from 'react';
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
            <li>The blog</li>
            <li>Visit the shop</li>
            <li>About</li>
            <li>Contact</li>
            <li>Tiktok</li>
            <li>Liketoknowit</li>
          </ul>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default MenuModal