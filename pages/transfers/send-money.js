import React, { useState } from 'react';
import Layout from '@/components/layout';
import axios from 'axios';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';

export default function SendMoney() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${localStorage.getItem('token')}`;
    await axios
      .post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/transfers/send`, {
        username,
        currency,
        amount,
      })
      .then((response) => {
        if (response.data?.success == true) {
          setLoading(false);
          router.push('/dashboard');
          toast.success('Transfer Successful!');
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.response.data.message);
      });
  };

  return (
    <Layout>
      <div className='container'>
        <div className='row'>
          <div className='col-md-7'>
            <div className='mt-5 container'>
              <div className='card px-1'>
                <form className='form-group' onSubmit={handleSubmit}>
                  <input
                    className='form-control mb-4 mt-2'
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder='Amount'
                    type='number'
                  />
                  <input
                    className='form-control mb-4'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Username'
                    type='text'
                  />
                  <select
                    id='currencySelect'
                    className='form-control mb-4'
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                  >
                    <option>Select Currency</option>
                    <option value='NGN'>Naira</option>
                    <option value='USD'>Dollar</option>
                    <option value='GBP'>Pounds</option>
                  </select>
                  <button className='btn btn-outline-secondary mb-2'>
                    {loading ? 'Loading...' : 'Send Money'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
