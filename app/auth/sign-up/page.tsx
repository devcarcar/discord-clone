'use client';
import axios from 'axios';
import { Check, Circle } from 'lucide-react';
import { redirect } from 'next/navigation';
import { useState } from 'react';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function validate() {
    try {
      const response = await axios.post('/api/users', { email, password });
      console.log(response);
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
        <div className='flex items-center text-[10px] text-black'>
          {password.length >= 9 ? (
            <Check color='#008000' size={9} />
          ) : (
            <Circle size={9} />
          )}
          {password.length >= 9 ? (
            <span>Contains at least 9 characters</span>
          ) : (
            <span>{password.length}/9 characters needed</span>
          )}
        </div>
        <div className='flex items-center text-[10px] text-black'>
          {password.match(/[!@#$%^&*]/) ? (
            <Check color='#008000' size={9} />
          ) : (
            <Circle size={9} />
          )}
          {password.match(/[!@#$%^&*]/) ? (
            <span>Contains at least 1 symbol</span>
          ) : (
            <span>0/1 symbol needed</span>
          )}
        </div>
        <div className='flex items-center text-[10px] text-black'>
          {password.match(/[A-Z]/) ? (
            <Check color='#008000' size={9} />
          ) : (
            <Circle size={9} />
          )}
          {password.match(/[A-Z]/) ? (
            <span>Contains at least 1 uppercase letter</span>
          ) : (
            <span>0/1 uppercase letter needed</span>
          )}
        </div>
        <div className='flex items-center text-[10px] text-black'>
          {password.match(/[a-z]/) ? (
            <Check color='#008000' size={9} />
          ) : (
            <Circle size={9} />
          )}
          {password.match(/[a-z]/) ? (
            <span>Contains at least 1 lowercase letter</span>
          ) : (
            <span>0/1 lowercase letter needed</span>
          )}
        </div>
        {!password.match('^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{9,}$') && (
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
        disabled={
          !email ||
          !password.match('^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{9,15}$')
        }
        className={`w-full py-2 rounded-lg shadow-md transition-colors ${
          !email ||
          !password.match('^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{9,15}$')
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
