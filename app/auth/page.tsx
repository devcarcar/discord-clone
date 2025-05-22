'use client';

import User from '@/schemas/user';
import axios from 'axios';
import { redirect, useRouter } from 'next/navigation';
import { useState } from 'react';
import jwt from 'jsonwebtoken';

export default function Auth() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  async function validate() {
    try {
      const res = await axios.post('/api/auth/email', {
        email,
        password,
      });
      router.push('/home');
    } catch (e) {
      setError(true);
    }
  }
  return (
    <div className='flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] min-h-[400px] bg-white p-8 rounded-lg shadow-md'>
      <h1 className='text-xl text-black mb-8'>Sign in to Chat</h1>

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

        {error && (
          <p className='text-red-500 text-sm mt-2'>Error! Wrong credentials</p>
        )}
      </div>

      <button
        disabled={!email || !password}
        onClick={validate}
        className={`w-full py-2 rounded-lg shadow-md transition-colors ${
          !email || !password
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        Sign in
      </button>

      <hr className='w-full border-gray-300 my-6' />

      <p className='text-black text-center'>
        Don't have an account?{' '}
        <a className='text-blue-600 hover:underline' href='/auth/sign-up'>
          Sign up
        </a>
      </p>
    </div>
  );
}
