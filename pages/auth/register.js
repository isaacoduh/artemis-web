import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      console.log(name);
      console.log(username);
      console.log(email);
      console.log(password);
      setLoading(false);
      toast.success('Registration Completed!');
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error(error);
    }
  };

  return (
    <div className='container'>
      <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className='row'>
          <h2 className='mb-3'>Register</h2>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter your name'
              className='form-control mb-3'
            />

            <input
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Enter your username'
              className='form-control mb-3'
            />

            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
              className='form-control mb-3'
            />

            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter your password'
              className='form-control mb-3'
            />

            <button
              className='btn btn-primary'
              disabled={loading || !name || !email || !password}
            >
              {loading ? 'Loading...' : 'Submit'}
            </button>
            <span>
              <p className='mt-2'>
                Already have an account? <Link href='/auth/login'>Login</Link>
              </p>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
