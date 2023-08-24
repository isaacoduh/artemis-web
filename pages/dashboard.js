import Layout from '@/components/layout';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import axios from 'axios';
import { toast } from 'react-hot-toast';
export default function Dashboard() {
  //   const token = localStorage.getItem('token');
  const [user, setUser] = useState({});
  const router = useRouter();

  const getUser = async () => {
    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${localStorage.getItem('token')}`;
    await axios
      .get(`http://localhost:5100/api/v1/auth/me`)
      .then((response) => {
        setUser(response.data.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logoutHandler = async () => {
    await localStorage.removeItem('token');
    toast.success('Logout successful');
    router.push('/auth/login');
  };

  useEffect(() => {
    const tokenPresent = localStorage.getItem('token');
    if (!tokenPresent) {
      router.push('/login');
    }
    getUser();
  }, []);

  return (
    <Layout>
      <div className='container' style={{ marginTop: '80px' }}>
        <div className='row justify-content-center'>
          <div className='col-md-12'>
            <div className='card border-0 rounded shadow-sm'>
              <div className='card-body'>
                Welcome <strong className='text-uppercase'>{user.name}</strong>
                <hr />
                <button
                  onClick={logoutHandler}
                  className='btn btn-md btn-secondary'
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
