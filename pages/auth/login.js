import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import Link from 'next/link';

// useAuth;

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios
        .post(`http://localhost:5100/api/v1/auth/login`, {
          email,
          password,
        })
        .then((response) => {
          localStorage.setItem('token', response.data.data.tokens.access.token);
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
      setLoading(false);
      router.push('/');
      toast.success('Login Success');
    } catch (error) {
      setLoading(false);
      toast.error('Something went wrong!');
    }
  };

  useEffect(() => {
    const tokenPresent = localStorage.getItem('token');
    if (tokenPresent) {
      router.push('/');
    }
  }, []);

  return (
    <div className='container'>
      <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className='row'>
          <h2 className='mb-3'>Login</h2>
          <form onSubmit={handleSubmit}>
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
              disabled={loading || !email || !password}
            >
              {loading ? 'Loading...' : 'Submit'}
            </button>
            <span>
              <p className='mt-2'>
                Don't have an account?{' '}
                <Link href='/auth/register'>Register</Link>
              </p>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
