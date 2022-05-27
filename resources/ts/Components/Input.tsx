import React, { InputHTMLAttributes } from 'react'

interface InputPorps extends InputHTMLAttributes<HTMLInputElement> {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
  type = 'text',
  name,
  value,
  className,
  autoComplete,
  required,
  handleChange,
}: InputPorps) => {
  return (
    <div className="flex flex-col items-start">
      <input
        type={type}
        name={name}
        value={value}
        className={
          `border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm ` +
          className
        }
        autoComplete={autoComplete}
        required={required}
        onChange={(e) => handleChange(e)}
      />
    </div>
  )
}

export default Input
