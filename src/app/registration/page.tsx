'use client'
import React, { useState, ChangeEvent } from 'react';
import Link from 'next/link';
import Input from '../components/Input';
import Select from '../components/Select';

const RegistrationPage: React.FC = () => {
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
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <div className="m-auto w-96 bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold mb-6">Create an Account</h2>
                <form>
                    <Input
                        label="First Name"
                        type="text"
                        id="name"
                        name="firstName"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                    />
                    <Input
                        label="Last Name"
                        type="text"
                        id="name"
                        name="lastName"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />
                    <Input
                        label="Email"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
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
                    <Input
                        label="Password"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    <Input
                        label="Confirm Password"
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                    >
                        Register
                    </button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-500">
                    Already have an account? <Link href="/login" className="text-blue-500">Sign In</Link>.
                </p>
            </div>
        </div>
    );
};

export default RegistrationPage;
