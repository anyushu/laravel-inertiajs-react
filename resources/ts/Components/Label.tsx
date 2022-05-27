import React, { ReactNode } from 'react'

type LabelProps = {
  forInput: string
  value: string
  className?: string
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
