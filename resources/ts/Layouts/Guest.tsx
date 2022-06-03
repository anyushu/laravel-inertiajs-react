import React, { ReactNode } from 'react'

type GuestProps = {
  children?: ReactNode
}

const Guest = ({ children }: GuestProps) => {
  return (
    <div className="flex flex-col items-center pt-6 min-h-screen bg-gray-100 sm:justify-center sm:pt-0">
      <div className="overflow-hidden py-4 px-6 mt-6 w-full bg-white shadow-md sm:max-w-md sm:rounded-lg">
        {children}
      </div>
    </div>
  )
}

export default Guest
