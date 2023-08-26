'use client'
import React, { ChangeEvent } from 'react';

interface InputProps {
  label: string;
  type: string;
  id: string;
  name: string; // Add the name property here
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CustomeInput: React.FC<InputProps> = ({ label, type, id, name, placeholder, value, onChange }) => {
    const onInputChnage = (e:any)=>{
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
        className=" text-black w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
        placeholder={placeholder}
        value={value}
        onChange={onInputChnage}
      />
    </div>
  );
};

export default CustomeInput;
