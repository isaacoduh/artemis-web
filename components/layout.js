import Navbar from './navbar';
import Sidebar from './sidebar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className='container-fluid'>
        <div className='row'>
          <Sidebar />
          <main className='col-md-9 ml-sm-auto col-lg-10 px-md-4 mt-5'>
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
