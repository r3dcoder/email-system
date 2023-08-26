
import React, { useState, ChangeEvent } from 'react';
import Link from 'next/link';
import Select from '../Select';
import CustomeInput from '../CustomInput';
 
const RegistrationForm: React.FC = () => {

    const [passwordMatchError, setPasswordMatchError] = useState('');
 
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

    const handleSubmit = () => {
        console.log("clicked")

         if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match!");
        } else {
            // Perform registration logic here
        }
    }
     return (
        <div   className="flex h-screen bg-gray-100">
            <div className="m-auto w-full md:max-w-[450px] bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold mb-6">Create an Account</h2>
                {formData.gender}--
                <div  >
                    <CustomeInput
                        label="First Name"
                        type="text"
                        id="name"
                        name="firstName"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                    />
                    <CustomeInput
                        label="Last Name"
                        type="text"
                        id="name"
                        name="lastName"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />
                    <CustomeInput
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
                    <CustomeInput
                        label="Password"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    <CustomeInput
                        label="Confirm Password"
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                    />

                    {passwordMatchError && (
                        <p className="text-red-500 text-sm mb-2">{passwordMatchError}</p>
                    )}
                    <button
                       onClick={()=>handleSubmit()}
                         className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                    >
                        Register
                    </button>
                </div>
                <p className="mt-4 text-center text-sm text-gray-500">
                    Already have an account? <Link href="/login" className="text-blue-500">Sign In</Link>.
                </p>
            </div>
        </div>
    );
};

export default RegistrationForm;
