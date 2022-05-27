import React from 'react'

type CheckboxProps = {
  name: string
  value?: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox = ({ name, value, handleChange }: CheckboxProps) => {
  return (
    <input
      type="checkbox"
      name={name}
      value={value}
      className="text-indigo-600 rounded border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 shadow-sm"
      onChange={(e) => handleChange(e)}
    />
  )
}

export default Checkbox
