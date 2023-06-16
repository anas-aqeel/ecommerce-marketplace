'use client'
import { useAuth } from '@clerk/nextjs'
import { Menu, Popover, Transition } from '@headlessui/react'
import { Loader2, ShoppingCart, X } from 'lucide-react'
import React, { Fragment, useContext, useState } from 'react'
import Cart from './Cart'
import Link from 'next/link'
import Image from 'next/image'
import { CARTCONTEXT } from './section/CartContext'
import { AlignJustify } from 'lucide-react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const MenuCard = ({ navigation }: any) => {
  let auth = useAuth()
  let menuItems = [
    {
      label: 'Your Profile',
      href: '/profile',
      onclick: () => {},
    },
    {
      label: 'Settings',
      href: '/settings',
      onclick: () => {},
    },
    {
      label: 'Sign out',
      href: '/sign-up',
      onclick: () => {
        auth.signOut()
      },
    },
  ]
  let [open, setOpen] = useState<boolean>(false)
  let {
    cart: { cartItems },
  } = useContext(CARTCONTEXT)
  return (
    <>
      <Cart openPop={open} setOpenPop={setOpen} />
      {auth.isLoaded ? (
        auth.isSignedIn ? (
          <>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="rounded-full relative p-1 mr-2 drop-shadow-sm  text-gray-800 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <div className="-top-1 absolute -right-1.5">
                <p className="flex h-1 w-1 items-center justify-center rounded-full bg-red-500 p-2.5 text-xs text-white">
                  {cartItems != 'loading' ? `${cartItems.length}` : 0}
                </p>
              </div>
              <span className="sr-only">View notifications</span>
              <ShoppingCart className="h-6 w-6" />
            </button>
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only">Open user menu</span>
                  <Image
                    priority={false}
                    height={'20'}
                    width={'20'}
                    className="h-8 w-8 rounded-full"
                    src={'/thumbnail.png'}
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
                        <Link
                          onClick={e.onclick}
                          href={e.href}
                          shallow
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'w-full text-start block px-4 py-2 text-sm text-gray-700',
                          )}
                        >
                          {e.label}
                        </Link>
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
            <Link
              href={'/sign-in'}
              className="rounde  mr-3 hidden border border-blue-700 py-1.5 px-6 text-center text-sm font-medium text-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 md:inline-block rounded-lg"
            >
              Login
            </Link>
            <Link
              href={'/sign-up'}
              className="rounde mr-3 hidden bg-blue-700 py-1.5 px-6 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 md:mr-0 md:inline-block rounded-lg"
            >
              Register
            </Link>{' '}
          </>
        )
      ) : (
        <div>
          <Loader2 className="animate-spin h-5 w-5 mr-3 text-black" />
        </div>
      )}
      <Popover.Button className="  md:hidden inline-flex items-center justify-center  rounded-md  p-2">
        <span className="sr-only">Open menu</span>
        <AlignJustify className="h-6 w-6" color="black" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="fixed inset-0 transform z-50 transition md:hidden"
        >
          <div className="relative rounded-lg bg-[#212121] h-screen w-screen ">
            <div className="bg-[#212121] border-b  border-white border-opacity-50 px-5 py-3">
              <div className="flex items-center justify-between">
                <div className="focus:border:0 flex items-center justify-center space-x-1 focus:outline-0 focus:ring-0">
                  <p className="whitespace-nowrap text-xl font-semibold text-white">
                    {' '}
                    E-COmMERce
                  </p>
                </div>
                <div className="mr-3">
                  <Popover.Button className=" inline-flex items-center justify-center rounded-md  p-2">
                    <X className="h-6 w-6" aria-hidden="true" color="white" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className=" py-4 px-2">
              <div className="mb-2 grid grid-cols-1 gap-y-1 gap-x-1">
                {navigation.map(
                  (
                    nav: { name: string; href: string; current: boolean },
                    i: number,
                  ) => {
                    return (
                      <a
                        key={i}
                        href={nav.href}
                        className={`rounded-md py-2 px-2 text-base font-medium  text-white hover:text-[#fdd46e]
                        ${nav.current ? '  text-[#fdd46e] ' : 'text-white'}
                        `}
                      >
                        {nav.name}
                      </a>
                    )
                  },
                )}
              </div>
            </div>
            {!auth.userId && (
              <div className="bottom-5 right-0 left-0 absolute w-full flex flex-col items-center">
                <Link
                  prefetch
                  href={'/sign-in'}
                  className=" whitespace-nowrap w-[90%]   text-center  border border-[#fff] bg-black text-white rounded-lg py-2 font-bold justify-center items-center px-3 text-sm"
                >
                  Sign in
                </Link>
                <Link
                  prefetch
                  href={'/sign-up'}
                  className="mt-1 whitespace-nowrap  w-[90%]   text-center  border border-[#fff] bg-black text-white rounded-lg py-2 font-bold justify-center items-center px-3 text-sm"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </Popover.Panel>
      </Transition>
    </>
  )
}

export default MenuCard
