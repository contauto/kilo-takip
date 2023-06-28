import React from 'react';

const Input = ({ label, placeholder, value, onChange, error, type, name }) => {
    return (
        <div className="flex flex-col mb-4">
            <label className="mb-1">{label}</label>
            <input
                className={`px-4 py-2 border rounded-md focus:outline-none ${
                    error ? 'border-red-500' : 'border-gray-300'
                }`}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                name={name}
            />
            {error && <span className="text-red-500 text-sm">{error}</span>}
        </div>
    );
};

export default Input;
