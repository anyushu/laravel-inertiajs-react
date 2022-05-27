import { Head, Link, useForm } from '@inertiajs/inertia-react'
import React from 'react'
import route from 'ziggy-js'
import Button from '@/Components/Button'
import Guest from '@/Layouts/Guest'

const VerifyEmail = ({ status }) => {
  const { post, processing } = useForm()

  const submit = (e) => {
    e.preventDefault()

    post(route('verification.send'))
  }

  return (
    <Guest>
      <Head title="Email Verification" />

      <div className="mb-4 text-sm text-gray-600">
        Thanks for signing up! Before getting started, could you verify your email address by
        clicking on the link we just emailed to you? If you didn't receive the email, we will gladly
        send you another.
      </div>

      {status === 'verification-link-sent' && (
        <div className="mb-4 text-sm font-medium text-green-600">
          A new verification link has been sent to the email address you provided during
          registration.
        </div>
      )}

      <form onSubmit={submit}>
        <div className="flex justify-between items-center mt-4">
          <Button processing={processing}>Resend Verification Email</Button>

          <Link
            href={route('logout')}
            method="post"
            as="button"
            className="text-sm text-gray-600 hover:text-gray-900 underline"
          >
            Log Out
          </Link>
        </div>
      </form>
    </Guest>
  )
}

export default VerifyEmail
