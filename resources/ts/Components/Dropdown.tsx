import { Transition } from '@headlessui/react'
import { BaseInertiaLinkProps, Link } from '@inertiajs/inertia-react'
import React, { useState, useContext, Dispatch, SetStateAction, ReactNode } from 'react'

const DropDownContext = React.createContext(
  {} as {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
    toggleOpen: () => void
  },
)

const Dropdown = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setOpen((previousState) => !previousState)
  }

  return (
    <DropDownContext.Provider value={{ open, setOpen, toggleOpen }}>
      <div className="relative">{children}</div>
    </DropDownContext.Provider>
  )
}

const Trigger = ({ children }: { children: ReactNode }) => {
  const { open, setOpen, toggleOpen } = useContext(DropDownContext)

  return (
    <>
      <div onClick={toggleOpen}>{children}</div>

      {open && <div className="" onClick={() => setOpen(false)}></div>}
    </>
  )
}

type ContentProps = {
  align?: 'right' | 'left'
  width?: string
  contentClasses?: string
  children: JSX.Element
}

const Content = ({
  align = 'right',
  width = '48',
  contentClasses = 'py-1 bg-white',
  children,
}: ContentProps) => {
  const { open, setOpen } = useContext(DropDownContext)

  let alignmentClasses = 'origin-top'

  if (align === 'left') {
    alignmentClasses = 'origin-top-left left-0'
  } else if (align === 'right') {
    alignmentClasses = 'origin-top-right right-0'
  }

  let widthClasses = ''

  if (width === '48') {
    widthClasses = 'w-48'
  }

  return (
    <>
      <Transition
        show={open}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        {open && (
          <div
            className={`absolute z-50 mt-2 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`}
            onClick={() => setOpen(false)}
          >
            <div className={`rounded-md ring-1 ring-black ring-opacity-5 ` + contentClasses}>
              {children}
            </div>
          </div>
        )}
      </Transition>
    </>
  )
}

interface DropdownLinkProps extends BaseInertiaLinkProps {
  children: ReactNode
}

const DropdownLink = ({ href, method = 'post', as = 'a', children }: DropdownLinkProps) => {
  return (
    <Link
      href={href}
      method={method}
      as={as}
      className="block py-2 px-4 w-full text-sm leading-5 text-left text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
    >
      {children}
    </Link>
  )
}

Dropdown.Trigger = Trigger
Dropdown.Content = Content
Dropdown.Link = DropdownLink

export default Dropdown
