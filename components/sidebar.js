import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
  return (
    <nav className='col-md-3 col-lg-2 d-md-block bg-dark sidebar'>
      <div className='sidebar-brand'>
        <Link href='/dashboard' legacyBehavior>
          <a className='navbar-brand'>Artemis</a>
        </Link>
      </div>
      <div className='position-sticky'>
        <ul className='nav flex-column sidebar-nav'>
          <li className='nav-item'>
            <a className='nav-link active' href='#'>
              Overview
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Payments
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Savings
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Settings
            </a>
          </li>
        </ul>
        <div className='position-absolute bottom-0 pb-3 text-center w-100'>
          <small className='text-muted'>Version 1.0.0</small>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
