'use client'
import React, { ChangeEvent } from 'react';

interface InputProps {
  label: string;
  type: string;
  id: string;
  name: string; // Add the name property here
  placeholder?: string;
  value: string;
  error?: boolean;
  errorMsg?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CustomeInput: React.FC<InputProps> = ({ label, type, id, name, placeholder, value, error = false, errorMsg = "", onChange }) => {
  const onInputChnage = (e: any) => {
    console.log("......................")
    onChange(e)
  }
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block font-medium text-gray-600">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name} // Include the name property
        className=" border-b-2 border-gray-400 bg-transparent p-2 rounded-md font-semibold transition duration-200 focus:outline-none focus:border-purple-700 w-full"
        placeholder={placeholder}
        value={value}
        onChange={onInputChnage}
      />

      {errorMsg && <div className="text-red-500 my-2">{errorMsg}</div>}

    </div>
  );
};

export default CustomeInput;
