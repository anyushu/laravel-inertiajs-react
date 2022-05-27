import React, { LabelHTMLAttributes, ReactNode } from 'react'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  forInput: string
  value: string
  children?: ReactNode
}

const Label = ({ forInput, value, className, children }: LabelProps) => {
  return (
    <label htmlFor={forInput} className={`block font-medium text-sm text-gray-700 ` + className}>
      {value ? value : children}
    </label>
  )
}

export default Label
