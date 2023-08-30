import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

import { toast } from 'react-hot-toast';
const Sidebar = () => {
  const router = useRouter();
  const handleLogout = async () => {
    await localStorage.clear();
    toast.success('Logout successful');
    router.push('/auth/login');
  };
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
          <li className='nav-item'>
            <button onClick={handleLogout} className='nav-link'>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
