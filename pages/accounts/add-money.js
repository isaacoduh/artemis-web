import Layout from '@/components/layout';
import axios from 'axios';
import React, { useState } from 'react';

export default function AddMoney() {
  const [user, setUser] = useState({});
  const [amount, setAmount] = useState('');

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
        localStorage.clear();
        router.push('/auth/login');
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(amount);
    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${localStorage.getItem('token')}`;
    await axios
      .post(`http://localhost:5100/api/v1/account/accept-pay`, {
        amount,
        email: user.email,
      })
      .then((response) => {
        window.location.href = response.data?.data.authorization_url;
      });
  };
  return (
    <Layout>
      <div className='mt-5'>
        <div className='card'>
          <div className=''>
            <form className='form-group' onSubmit={handleSubmit}>
              <input
                className='form-control mb-4'
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder='Amount'
                type='number'
              />
              <button className='btn btn-outline-secondary'>Add Funds</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
