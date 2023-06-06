'use client'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { Fragment } from 'react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const MenuCard = () => {
  let router = useRouter()

  let menuItems = [
    {
      label: 'Your Profile',
      onClick: () => {
        router.push('/profile')
      },
    },
    { label: 'Settings', onClick: () => {} },
    { label: 'Sign out', onClick: () => signOut() },
  ]
  const { data: session } = useSession()
  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="sr-only">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full"
            src={session?.user.image ? session?.user?.image: "https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png"}
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
          {session != undefined ? (
            menuItems.map((e) => (
              <Menu.Item>
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
            ))
          ) : (
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => router.push('/login')}
                  className={classNames(
                    active ? 'bg-gray-100' : '',
                    'w-full text-start block px-4 py-2 text-sm text-gray-700',
                  )}
                >
                  Log in
                </button>
              )}
            </Menu.Item>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default MenuCard
