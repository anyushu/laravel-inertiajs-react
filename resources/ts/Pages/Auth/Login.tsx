import { Head, Link, useForm } from '@inertiajs/inertia-react'
import React, { useEffect } from 'react'
import route from 'ziggy-js'
import Button from '@/Components/Button'
import Checkbox from '@/Components/Checkbox'
import Input from '@/Components/Input'
import Label from '@/Components/Label'
import ValidationErrors from '@/Components/ValidationErrors'
import Guest from '@/Layouts/Guest'

const Login = ({ status, canResetPassword }) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: '',
  })

  useEffect(() => {
    return () => {
      reset('password')
    }
  }, [])

  const onHandleChange = (event) => {
    setData(
      event.target.name,
      event.target.type === 'checkbox' ? event.target.checked : event.target.value,
    )
  }

  const submit = (e) => {
    e.preventDefault()

    post(route('login'))
  }

  return (
    <Guest>
      <Head title="Log in" />

      {status && <div className="mb-4 text-sm font-medium text-green-600">{status}</div>}

      <ValidationErrors errors={errors} />

      <form onSubmit={submit}>
        <div>
          <Label forInput="email" value="Email" />

          <Input
            type="text"
            name="email"
            value={data.email}
            className="block mt-1 w-full"
            autoComplete="username"
            handleChange={onHandleChange}
            required={true}
          />
        </div>

        <div className="mt-4">
          <Label forInput="password" value="Password" />

          <Input
            type="password"
            name="password"
            value={data.password}
            className="block mt-1 w-full"
            autoComplete="current-password"
            handleChange={onHandleChange}
            required={true}
          />
        </div>

        <div className="block mt-4">
          <label className="flex items-center">
            <Checkbox name="remember" value={data.remember} handleChange={onHandleChange} />

            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
        </div>

        <div className="flex justify-end items-center mt-4">
          {canResetPassword && (
            <Link
              href={route('password.request')}
              className="text-sm text-gray-600 hover:text-gray-900 underline"
            >
              Forgot your password?
            </Link>
          )}

          <Button className="ml-4" processing={processing}>
            Log in
          </Button>
        </div>
      </form>
    </Guest>
  )
}

export default Login
