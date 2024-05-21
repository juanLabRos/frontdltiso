import React from "react";

interface InputFormProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  plcolor?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string; // Añadimos la propiedad value
  error?: string
}

export default function InputForm({ label, name, type, placeholder, plcolor = '', onChange = () => {}, value = '' }: InputFormProps) {
  return (
    <div className="w-10/12">
      <label htmlFor={name} className={`${plcolor} font-semibold block text-sm leading-8`}>
        {label}
      </label>
      <div className="mt-2">
        <input
          id={name}
          name={name}
          type={type}
          autoComplete={name}
          required
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          className={`block w-full indent-4 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ${plcolor === '' ? 'placeholder:text-gray-400 text-black' : `placeholder:${plcolor} ${plcolor}`} ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6`}
        />
      </div>
    </div>
  );
}
