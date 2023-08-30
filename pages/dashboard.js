import Layout from '@/components/layout';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FaMoneyBillWave, FaPlus } from 'react-icons/fa';

import axios from 'axios';
import { toast } from 'react-hot-toast';
import Sidebar from '@/components/sidebar';
import AccountCard from '@/components/AccountCard';
export default function Dashboard() {
  //   const token = localStorage.getItem('token');
  const [user, setUser] = useState({});
  const [userAccounts, setUserAccounts] = useState([]);
  const router = useRouter();

  // const userAccounts = [
  //   { currency: 'NGN', balance: 14000 },
  //   { currency: 'USD', balance: 480 },
  // ];

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

  const getUserAccounts = async () => {
    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${localStorage.getItem('token')}`;
    await axios
      .get('http://localhost:5100/api/v1/account/my-accounts')
      .then((response) => {
        setUserAccounts(response.data.data.accounts);
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

  const handleAddMoney = async () => {
    router.push('/accounts/add-money');
  };

  useEffect(() => {
    const tokenPresent = localStorage.getItem('token');
    if (!tokenPresent) {
      router.push('/auth/login');
    }
    getUser();
    getUserAccounts();
  }, []);

  return (
    <Layout>
      <div className='pt-3 pb-3 mb-3 border-bottom'>
        <h4>Overview</h4>
        <p>Send and Receive Money</p>
      </div>
      <div className='container'>
        <div className='d-flex justify-content-between mb-3'>
          <h5>Your Accounts</h5>
          <div>
            <button
              className='btn btn-outline-dark mx-1'
              style={{ borderRadius: 0 }}
            >
              <FaMoneyBillWave className='mx-1' />
              Make Payments
            </button>
            <button
              onClick={handleAddMoney}
              className='btn btn-dark'
              style={{ borderRadius: 0 }}
            >
              <FaPlus className='mx-1' />
              Add Money
            </button>
          </div>
        </div>
        <div className='card-deck'>
          <div className='row'>
            {userAccounts.map((account, index) => (
              <div className='col-lg-4'>
                <AccountCard
                  key={index}
                  currency={account.currency}
                  balance={account.balance}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <Sidebar />
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
      </div> */}
    </Layout>
  );
}
