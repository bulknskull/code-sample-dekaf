import React from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
  return (
    <nav className='left-nav'>
      <Link to='/user'><div className='left-option'>Account information</div></Link>
      <Link to='/user'><div className='left-option'>Broker overview</div></Link>
      <Link to='/history'><div className='left-option'>Session history</div></Link>
    </nav>
  )
}

export default LeftNav;