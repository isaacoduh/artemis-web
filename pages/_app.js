// import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Toaster position='top-right' reverseOrder={false} />
      <Component {...pageProps} />
    </>
  );
}
