import React, { ReactNode, useState } from 'react'
import route from 'ziggy-js'
import Dropdown from '@/Components/Dropdown'
import NavLink from '@/Components/NavLink'
import ResponsiveNavLink from '@/Components/ResponsiveNavLink'

type AuthenticatedProps = {
  auth: { user: App.Models.User }
  header?: ReactNode
  children?: ReactNode
}

const Authenticated = ({ auth, header, children }: AuthenticatedProps) => {
  const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white border-b border-gray-100">
        <div className="pr-4 mx-auto max-w-7xl sm:pr-6 lg:pr-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="hidden space-x-8 sm:flex sm:-my-px sm:ml-10">
                <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                  Dashboard
                </NavLink>
              </div>
            </div>

            <div className="hidden sm:flex sm:items-center sm:ml-6">
              <div className="relative ml-3">
                <Dropdown>
                  <Dropdown.Trigger>
                    <span className="inline-flex rounded-md">
                      <button
                        type="button"
                        className="inline-flex items-center py-2 px-3 text-sm font-medium leading-4 text-gray-500 hover:text-gray-700 bg-white rounded-md border border-transparent focus:outline-none transition duration-150 ease-in-out"
                      >
                        {auth.user.name}

                        <svg
                          className="-mr-0.5 ml-2 w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </span>
                  </Dropdown.Trigger>

                  <Dropdown.Content>
                    <Dropdown.Link href={route('logout')} method="post" as="button">
                      Log Out
                    </Dropdown.Link>
                  </Dropdown.Content>
                </Dropdown>
              </div>
            </div>

            <div className="flex items-center -mr-2 sm:hidden">
              <button
                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                className="inline-flex justify-center items-center p-2 text-gray-400 hover:text-gray-500 focus:text-gray-500 hover:bg-gray-100 focus:bg-gray-100 rounded-md focus:outline-none transition duration-150 ease-in-out"
              >
                <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path
                    className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                  <path
                    className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
          <div className="pt-2 pb-3 space-y-1">
            <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
              Dashboard
            </ResponsiveNavLink>
          </div>

          <div className="pt-4 pb-1 border-t border-gray-200">
            <div className="px-4">
              <div className="text-base font-medium text-gray-800">{auth.user.name}</div>
              <div className="text-sm font-medium text-gray-500">{auth.user.email}</div>
            </div>

            <div className="mt-3 space-y-1">
              <ResponsiveNavLink method="post" href={route('logout')} as="button" active={false}>
                Log Out
              </ResponsiveNavLink>
            </div>
          </div>
        </div>
      </nav>

      {header && (
        <header className="bg-white shadow">
          <div className="py-6 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">{header}</div>
        </header>
      )}

      <main>{children}</main>
    </div>
  )
}

export default Authenticated
