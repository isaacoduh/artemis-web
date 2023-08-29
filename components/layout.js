// import Navbar from './navbar';
import Sidebar from './sidebar';

export default function Layout({ children }) {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <Sidebar />
          <main className='col-md-9 ml-sm-auto col-lg-10 px-md-4'>
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
