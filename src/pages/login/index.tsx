
import React, { useState, ChangeEvent } from 'react';
import Link from 'next/link';
import CustomeInput from '@/components/CustomInput';
import { useRouter } from 'next/router';
import useApi from '@/utils/useApi';
import { SIGN_IN } from '@/utils/api-urls';
import { useAuth } from '@/context/auth-provider';
import { SignInReponse, User } from '@/type/user';

const LoginPage: React.FC = () => {
  const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const successMessage = router.query.success;

  const { apiResponse, call } = useApi<any>();
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const a = call(SIGN_IN, 'POST', { email, password }).then((response) => {
        console.log("apiResponse", apiResponse)

        if (!apiResponse.error) {
          const { token, user } = apiResponse.data
          login(user, token);
          router.push({
            pathname: "/profile"
          });
        }
      });


    } catch (error) {
      // Handle error case here
    }

  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="m-auto w-96 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-6">Sign in to your account</h2>
        {successMessage && (
          <div className="bg-green-200 text-green-800 p-4 mb-4">
            Registration successful! You can now log in.
          </div>
        )}

        {apiResponse.error && (
          <div className="bg-red-200 text-red-800 p-4 mb-4">
            Please Enter a valied email/passowrd
          </div>
        )}
        <form onSubmit={handleLogin}>
          <CustomeInput
            label="Email"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleInputChange}
          />
          <CustomeInput
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
