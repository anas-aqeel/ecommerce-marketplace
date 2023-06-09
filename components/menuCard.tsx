'use client'
import { useAuth } from '@clerk/nextjs'
import { Menu, Transition } from '@headlessui/react'
import { ShoppingCart } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { Fragment, useState } from 'react'
import Cart from './Cart'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const MenuCard = () => {
  let router = useRouter()
  let auth = useAuth()

  let menuItems = [
    {
      label: 'Your Profile',
      onClick: () => {
        router.push('/profile')
      },
    },
    { label: 'Settings', onClick: () => {} },
    {
      label: 'Sign out',
      onClick: () => {
        auth.signOut()
      },
    },
  ]
  let [open, setOpen] = useState<boolean>(false)
  return (
    <>
     <Cart openPop={open} setOpenPop={setOpen}/>
      {auth.isSignedIn ? (
        <>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="rounded-full  p-1 mr-2 drop-shadow-sm  text-gray-800 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span className="sr-only">View notifications</span>
            <ShoppingCart className="h-6 w-6" />
          </button>
          <Menu as="div" className="relative ml-3">
            <div>
              <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src={
                    'https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png'
                  }
                  alt=""
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {menuItems.map((e, i) => (
                  <Menu.Item key={i}>
                    {({ active }) => (
                      <button
                        onClick={e.onClick}
                        className={classNames(
                          active ? 'bg-gray-100' : '',
                          'w-full text-start block px-4 py-2 text-sm text-gray-700',
                        )}
                      >
                        {e.label}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </>
      ) : (
        <>
          {' '}
          <button
            type="button"
            onClick={() => {
              router.push('/sign-in')
            }}
            className="rounde mr-3 hidden border border-blue-700 py-1.5 px-6 text-center text-sm font-medium text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 md:inline-block rounded-lg"
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => {
              router.push('/sign-up')
            }}
            className="rounde mr-3 hidden bg-blue-700 py-1.5 px-6 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 md:mr-0 md:inline-block rounded-lg"
          >
            Register
          </button>{' '}
        </>
      )}
    </>
  )
}

export default MenuCard
