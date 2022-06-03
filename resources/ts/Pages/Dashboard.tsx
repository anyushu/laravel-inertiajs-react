import { Head } from '@inertiajs/inertia-react'
import React from 'react'
import Authenticated from '@/Layouts/Authenticated'

interface DashboardProps {
  auth: {
    user: App.Models.User
  }
  statuses: App.Models.ToDoStatus[]
}

const Dashboard = ({ auth, statuses }: DashboardProps) => {
  return (
    <Authenticated
      auth={auth}
      header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Dashboard</h2>}
    >
      <Head title="Dashboard" />

      <div className="container py-12">
        <div className="prose">
          <ul>
            {statuses.map((toDoStatus) => (
              <li key={toDoStatus.id}>
                <span>{toDoStatus.name}</span>
                <ul>
                  {toDoStatus.to_dos?.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Authenticated>
  )
}

export default Dashboard
