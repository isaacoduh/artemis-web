import Link from 'next/link';

function Navbar() {
  return (
    <header>
      <nav className='navbar navbar-expand-md navbar-light bg-light fixed-top border-0 shadow-sm'>
        <div className='container-fluid'>
          <Link href='/' legacyBehavior>
            <a className='navbar-brand'>Artemis</a>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
