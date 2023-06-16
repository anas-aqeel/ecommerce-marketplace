'use client'
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  UserButton,
  useAuth,
} from '@clerk/nextjs'
import { Popover, Transition } from '@headlessui/react'
import { Loader2, ShoppingCart, X } from 'lucide-react'
import React, { Fragment, useContext, useState } from 'react'
import Cart from './Cart'
import Link from 'next/link'
import { CARTCONTEXT } from './section/CartContext'
import { AlignJustify } from 'lucide-react'


const MenuCard = ({ navigation }: any) => {
  let auth = useAuth()
  let [open, setOpen] = useState<boolean>(false)
  let {
    cart: { cartItems },
  } = useContext(CARTCONTEXT)
  return (
    <>
      <Cart openPop={open} setOpenPop={setOpen} />
      <SignedIn>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-full relative  p-1 mr-4 drop-shadow-sm  text-gray-800 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          <div className="-top-1 absolute -right-1.5">
            <p className="flex h-1 w-1 items-center justify-center rounded-full bg-red-500 p-2.5 text-xs text-white">
              {cartItems != 'loading' ? `${cartItems.length}` : 0}
            </p>
          </div>
          <span className="sr-only">View notifications</span>
          <ShoppingCart className="h-6 w-6" />
        </button>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <ClerkLoaded>
        {auth.isSignedIn ? (
          <></>
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
        )}
      </ClerkLoaded>
      <ClerkLoading>
        <div className="flex justify-center items-center">
          <Loader2 color="black" className="animate-spin" />
        </div>
      </ClerkLoading>

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
