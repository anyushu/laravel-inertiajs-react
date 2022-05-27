import { Head } from '@inertiajs/inertia-react'
import React from 'react'
import Authenticated from '@/Layouts/Authenticated'

const Dashboard = (props: { auth: { user: App.Models.User } }) => {
  return (
    <Authenticated
      auth={props.auth}
      header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Dashboard</h2>}
    >
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">You{"'"}re logged in!</div>
          </div>
        </div>
      </div>
    </Authenticated>
  )
}

export default Dashboard
