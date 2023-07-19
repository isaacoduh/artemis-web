import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
// import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import {
  AiFillLayout,
  AiOutlineDashboard,
  AiOutlineLogout,
} from 'react-icons/ai';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const router = useRouter();
  const logout = () => {
    router.push('/auth/login');
  };
  return (
    <>
      <nav className='nav d-flex justify-content-between p-2 shadow mb-2'>
        <Link className='nav-link d-flex align-items-center' href='/'>
          <AiFillLayout color='#000000' />
          <span className='mx-1 text-dark'>Artemis</span>
        </Link>
        <>
          <Link className='nav-link d-flex align-items-center' href='/'>
            <AiOutlineDashboard /> <span className='mx-1'>Dashboard</span>
          </Link>
          <a
            onClick={logout}
            className='nav-link pointer d-flex align-items-center'
          >
            <AiOutlineLogout /> <span className='mx-1'>Logout</span>
          </a>
        </>
      </nav>
    </>
  );
}
