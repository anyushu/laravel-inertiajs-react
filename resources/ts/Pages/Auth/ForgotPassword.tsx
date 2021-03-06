import { Head, useForm } from '@inertiajs/inertia-react'
import React from 'react'
import route from 'ziggy-js'
import Button from '@/Components/Button'
import Input from '@/Components/Input'
import ValidationErrors from '@/Components/ValidationErrors'
import Guest from '@/Layouts/Guest'

const ForgotPassword = ({ status }: { status: string }) => {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
  })

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData('email', event.target.value)
  }

  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    post(route('password.email'))
  }

  return (
    <Guest>
      <Head title="Forgot Password" />

      <div className="mb-4 text-sm leading-normal text-gray-500">
        Forgot your password? No problem. Just let us know your email address and we will email you
        a password reset link that will allow you to choose a new one.
      </div>

      {status && <div className="mb-4 text-sm font-medium text-green-600">{status}</div>}

      <ValidationErrors errors={errors} />

      <form onSubmit={submit}>
        <Input
          type="text"
          name="email"
          value={data.email}
          className="block mt-1 w-full"
          handleChange={onHandleChange}
          autoComplete=""
          required={true}
        />

        <div className="flex justify-end items-center mt-4">
          <Button className="ml-4" processing={processing}>
            Email Password Reset Link
          </Button>
        </div>
      </form>
    </Guest>
  )
}

export default ForgotPassword
