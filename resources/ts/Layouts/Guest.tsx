import { Link } from '@inertiajs/inertia-react'
import React, { ReactNode } from 'react'
import ApplicationLogo from '@/Components/ApplicationLogo'

type GuestProps = {
  children?: ReactNode
}

const Guest = ({ children }: GuestProps) => {
  return (
    <div className="flex flex-col items-center pt-6 min-h-screen bg-gray-100 sm:justify-center sm:pt-0">
      <div>
        <Link href="/">
          <ApplicationLogo className="w-20 h-20 text-gray-500 fill-current" />
        </Link>
      </div>

      <div className="overflow-hidden py-4 px-6 mt-6 w-full bg-white shadow-md sm:max-w-md sm:rounded-lg">
        {children}
      </div>
    </div>
  )
}

export default Guest
