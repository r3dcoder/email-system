
import React, { useState, ChangeEvent } from 'react';
import Link from 'next/link';
import Select from '../Select';
import CustomeInput from '../CustomInput';
import useApi from '@/utils/useApi';
import { User } from '@/type/user';
import { REGISTRATION } from '@/utils/api-urls';
import { useRouter } from 'next/router';
import { ValidationErrors, validateForm } from '@/utils/vallidation-utils';
import { registrationValidationSchema } from '@/utils/validation-schema';

const RegistrationForm: React.FC = () => {

    const [passwordMatchError, setPasswordMatchError] = useState('');
    const { apiResponse, call } = useApi<User>();
    const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});

    const router = useRouter();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        gender: 'male',
        password: '',
        confirmPassword: '',
    });


    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        console.log(name, value)

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        if (name === 'confirmPassword') {
            if (value !== formData.password) {
                setPasswordMatchError("Passwords don't match");
            } else {
                setPasswordMatchError('');
            }
        }
    };

    const handleSubmit = async () => {

        const errors = validateForm(formData, registrationValidationSchema);
        if (Object.keys(errors).length === 0) {
            try {


                // Perform registration logic here
                const registrationUrl = REGISTRATION;
                const response = await call(registrationUrl, 'POST', {
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    gender: formData.gender,
                    password: formData.password,
                });
                console.log(".....................", response)
                router.push({
                    pathname: "/login",
                    query: { success: true },
                });

            } catch (error) {
                console.error('Registration failed:', error);
                // Handle error, show an error message
            }
        } else {
            setValidationErrors(errors);
        }

    };


    return (
            <div className="m-auto w-full md:max-w-[450px] bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold mb-6 text-black">Create an Account</h2>
                <div  >
                    <CustomeInput
                        label="First Name"
                        type="text"
                        id="name"
                        name="firstName"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        errorMsg={validationErrors.firstName}
                        onChange={handleInputChange}
                    />

                    <CustomeInput
                        label="Last Name"
                        type="text"
                        id="name"
                        name="lastName"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        errorMsg={validationErrors.last}
                        onChange={handleInputChange}
                    />
                    <CustomeInput
                        label="Email"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        errorMsg={validationErrors.email}
                        onChange={handleInputChange}
                    />

                    <Select
                        label="Gender"
                        name="gender"
                        value={formData.gender}
                        options={[
                            { value: 'male', label: 'Male' },
                            { value: 'female', label: 'Female' },
                            { value: 'other', label: 'Other' },
                        ]}
                        onChange={handleInputChange}
                    />
                    <CustomeInput
                        label="Password"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        errorMsg={validationErrors.password}
                        onChange={handleInputChange}
                    />
                    <CustomeInput
                        label="Confirm Password"
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        errorMsg={validationErrors.password}
                        onChange={handleInputChange}
                    />

                    {passwordMatchError && (
                        <p className="text-red-500 text-sm mb-2">{passwordMatchError}</p>
                    )}
                    {
                        apiResponse.loading ?
                            <button

                                className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-blue-600"
                            >
                                Loading..
                            </button>
                            :
                            <button
                                onClick={() => handleSubmit()}
                                className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-blue-600"
                            >
                                Register
                            </button>
                    }
                </div>
                <p className="mt-4 text-center text-sm text-gray-500">
                    Already have an account? <Link href="/login" className="text-blue-500">Sign In</Link>.
                </p>
            </div>
    );
};

export default RegistrationForm;
