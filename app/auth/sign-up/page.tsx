'use client';
import axios from 'axios';
import { Check, Circle } from 'lucide-react';
import { redirect, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Auth() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function validate() {
    try {
      const response = await axios.post('/api/users', { email, password });
      await axios.post('/api/auth/signup', { email, password });
      router.push('/home');
    } catch (e) {}
  }

  return (
    <div className='flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] min-h-[400px] bg-white p-8 rounded-lg shadow-md'>
      <h1 className='text-xl text-black mb-8'>Sign up</h1>

      <div className='w-full space-y-4 mb-6'>
        <div>
          <h1 className='text-black'>Email ID</h1>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className='w-full text-black border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500'
            type='text'
            placeholder='Enter your Email ID'
            value={email}
          />
        </div>
        <div>
          <h1 className='text-black'>Password</h1>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className='w-full text-black border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:border-blue-500'
            type='password'
            placeholder='Enter your Password'
            value={password}
          />
        </div>

        {password.length < 8 && (
          <p className='text-red-500 text-sm mt-2'>
            Error! Password is too weak
          </p>
        )}
        {password.length > 15 && (
          <p className='text-red-500 text-sm mt-2'>
            Error! Password is too long
          </p>
        )}
      </div>

      <button
        onClick={validate}
        disabled={!email || password.length < 8 || password.length > 15}
        className={`w-full py-2 rounded-lg shadow-md transition-colors ${
          !email || password.length < 8 || password.length > 15
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        Sign up
      </button>

      <hr className='w-full border-gray-300 my-6' />

      <p className='text-black text-center'>
        Have an account?{' '}
        <a className='text-blue-600 hover:underline' href='/auth'>
          Sign in
        </a>
      </p>
    </div>
  );
}
