import { Head, Link, useForm } from '@inertiajs/inertia-react'
import React, { useEffect } from 'react'
import route from 'ziggy-js'
import Button from '@/Components/Button'
import Input from '@/Components/Input'
import Label from '@/Components/Label'
import ValidationErrors from '@/Components/ValidationErrors'
import Guest from '@/Layouts/Guest'

const Register = () => {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  useEffect(() => {
    return () => {
      reset('password', 'password_confirmation')
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

    post(route('register'))
  }

  return (
    <Guest>
      <Head title="Register" />

      <ValidationErrors errors={errors} />

      <form onSubmit={submit}>
        <div>
          <Label forInput="name" value="なまえ" />

          <Input
            type="text"
            name="name"
            value={data.name}
            className="block mt-1 w-full"
            autoComplete="name"
            handleChange={onHandleChange}
            required
          />
        </div>

        <div className="mt-4">
          <Label forInput="email" value="メールアドレス" />

          <Input
            type="email"
            name="email"
            value={data.email}
            className="block mt-1 w-full"
            autoComplete="username"
            handleChange={onHandleChange}
            required={true}
          />
        </div>

        <div className="mt-4">
          <Label forInput="password" value="パスワード" />

          <Input
            type="password"
            name="password"
            value={data.password}
            className="block mt-1 w-full"
            autoComplete="new-password"
            handleChange={onHandleChange}
            required={true}
          />
        </div>

        <div className="mt-4">
          <Label forInput="password_confirmation" value="パスワード確認" />

          <Input
            type="password"
            name="password_confirmation"
            value={data.password_confirmation}
            className="block mt-1 w-full"
            handleChange={onHandleChange}
            autoComplete=""
            required={true}
          />
        </div>

        <div className="flex justify-end items-center mt-4">
          <Link
            href={route('login')}
            className="text-sm text-gray-600 hover:text-gray-900 underline"
          >
            すでに登録済みですか？
          </Link>

          <Button className="ml-4" processing={processing}>
            登録
          </Button>
        </div>
      </form>
    </Guest>
  )
}

export default Register
