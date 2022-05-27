import React from 'react'

const Checkbox = ({ name, value, handleChange }) => {
  return (
    <input
      type="checkbox"
      name={name}
      value={value}
      className="text-indigo-600 rounded border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 shadow-sm"
      onChange={(e) => handleChange(e)}
    />
  )
}

export default Checkbox
