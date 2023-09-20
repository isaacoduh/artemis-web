import Layout from '@/components/layout';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import toast from 'react-hot-toast';

export default function CreateAccount() {
  const [user, setUser] = useState({});
  const [currency, setCurrency] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const getUser = async () => {
    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${localStorage.getItem('token')}`;
    await axios
      .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/me`)
      .then((response) => {
        setUser(response.data.data.user);
      })
      .catch((error) => {
        localStorage.clear();
        router.push('/auth/login');
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${localStorage.getItem('token')}`;
    await axios
      .post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/account/create`, {
        currency,
      })
      .then((response) => {
        if (response.data?.success == true) {
          setLoading(false);
          router.push('/dashboard');
          toast.success('Account Created!');
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.response.data.message);
      });
  };

  return (
    <Layout>
      <div className='mt-5'>
        <div className='card'>
          <div className=''>
            <form className='form-group' onSubmit={handleSubmit}>
              <select
                id='currencySelect'
                className='form-control'
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option>Select Currency</option>
                <option value='NGN'>Naira</option>
                <option value='USD'>Dollar</option>
                <option value='GBP'>Pounds</option>
              </select>
              <button className='btn btn-outline-secondary'>
                {loading ? 'Loading...' : 'Create Account'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
