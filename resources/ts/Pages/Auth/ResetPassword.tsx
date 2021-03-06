import { Head, useForm } from '@inertiajs/inertia-react'
import React, { useEffect } from 'react'
import route from 'ziggy-js'
import Button from '@/Components/Button'
import Input from '@/Components/Input'
import Label from '@/Components/Label'
import ValidationErrors from '@/Components/ValidationErrors'
import Guest from '@/Layouts/Guest'

const ResetPassword = ({ token, email }: { token: string; email: string }) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    token: token,
    email: email,
    password: '',
    password_confirmation: '',
  })

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation')
    }
  }, [])

  const onHandleChange = (event) => {
    setData(event.target.name, event.target.value)
  }

  const submit = (e) => {
    e.preventDefault()

    post(route('password.update'))
  }

  return (
    <Guest>
      <Head title="Reset Password" />

      <ValidationErrors errors={errors} />

      <form onSubmit={submit}>
        <div>
          <Label forInput="email" value="Email" />

          <Input
            type="email"
            name="email"
            value={data.email}
            className="block mt-1 w-full"
            autoComplete="username"
            handleChange={onHandleChange}
            required={false}
          />
        </div>

        <div className="mt-4">
          <Label forInput="password" value="Password" />

          <Input
            type="password"
            name="password"
            value={data.password}
            className="block mt-1 w-full"
            autoComplete="new-password"
            handleChange={onHandleChange}
            required={false}
          />
        </div>

        <div className="mt-4">
          <Label forInput="password_confirmation" value="Confirm Password" />

          <Input
            type="password"
            name="password_confirmation"
            value={data.password_confirmation}
            className="block mt-1 w-full"
            autoComplete="new-password"
            handleChange={onHandleChange}
            required={false}
          />
        </div>

        <div className="flex justify-end items-center mt-4">
          <Button className="ml-4" processing={processing}>
            Reset Password
          </Button>
        </div>
      </form>
    </Guest>
  )
}

export default ResetPassword
