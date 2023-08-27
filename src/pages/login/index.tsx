
import React, { useState, ChangeEvent } from 'react';
import Link from 'next/link';
import CustomeInput from '@/components/CustomInput';
import { useRouter } from 'next/router';
import useApi from '@/utils/useApi';
import { SIGN_IN } from '@/utils/api-urls';
import { useAuth } from '@/context/auth-provider';
import { SignInReponse, User } from '@/type/user';
import { loginValidationSchema } from '@/utils/validation-schema';
import { ValidationErrors, validateForm } from '@/utils/vallidation-utils';

const LoginPage: React.FC = () => {
  const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const successMessage = router.query.success;
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});

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
    const formData = {
      email: email,
      password: password
    }
    const errors = validateForm(formData, loginValidationSchema);

    if (Object.keys(errors).length === 0) {
      try {
        const a = call(SIGN_IN, 'POST', { email, password }).then((response) => {
          console.log("apiResponse", apiResponse)

          if (!apiResponse.error && apiResponse.data !=null) {
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
    }
    else {
      setValidationErrors(errors);
  }

  };

  return (
    <div className='bg-gradient-to-r from-purple-300 to-indigo-600 h-screen flex'>
      <div className="m-auto w-96 bg-white rounded-lg shadow-lg p-8 ">
        <h2 className="text-2xl font-semibold mb-6 text-purple-500">Sign in to your account</h2>
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
            errorMsg={validationErrors.email}
            onChange={handleInputChange}
          />
          <CustomeInput
            label="Password"
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            errorMsg={validationErrors.passowrd}
            onChange={handleInputChange}
          />
          <button className="bg-white text-purple-700 font-semibold text-sm mt-8 py-4 px-5 rounded-full border border-purple-300 uppercase flex items-center w-full hover:border-purple-700 hover:shadow-md transition duration-200 focus:outline-none focus:border-purple-700">
            Log In
            <svg className="ml-auto text-purple-600 text-xl" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500">
          Don't have an account? <Link href="/registration" className="text-indigo-600">Create one</Link>.
        </p>
      </div>

    </div>
  );
};

export default LoginPage;
