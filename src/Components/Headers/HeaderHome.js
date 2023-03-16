// REACT
import React from 'react';
// ICONS
import { Search, List } from 'react-bootstrap-icons';

// COMPONENT FUNCTION
const HeaderHome = () => {
  return (
    <div>
      <div className='row no-gutters justify-content-center'>
        <div className='col-12 text-center'>
          <h3>Header <span><Search /></span><span><List /></span></h3>
        </div>
      </div>
    </div>
  )
}

export default HeaderHome