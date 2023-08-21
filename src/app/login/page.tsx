'use client'

import React, { useState, ChangeEvent } from 'react';
import Link from 'next/link';
import Input from '../components/Input';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    // Perform login logic here
    console.log('Logging in with:', email, password);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="m-auto w-96 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-6">Sign in to your account</h2>
        <form onSubmit={handleLogin}>
          <Input
            label="Email"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleInputChange}
          />
          <Input
            label="Password"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500">
          Don't have an account? <Link href="/registration" className="text-blue-500">Create one</Link>.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
