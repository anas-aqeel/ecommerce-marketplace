'use client'
import { Check } from 'lucide-react'
import Link from 'next/link'
import React, { useContext, useEffect } from 'react'
import { CARTCONTEXT } from '../../components/section/CartContext'

const page = () => {
  let {
    cart: { setCart },
  } = useContext(CARTCONTEXT)

  return (
    <>
      <div className="bg-gray-100 h-[80vh] w-full flex justify-center items-center">
        <div className="bg-white p-6  md:mx-auto rounded-lg">
          <div className="bg-green-600 w-16 h-16 mx-auto rounded-full flex justify-center items-center my-6">
            <Check strokeWidth={'3px'} className="text-white text-lg" />
          </div>
          <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
              Payment Done!
            </h3>
            <p className="text-gray-600 my-2">
              Thank you for completing your secure online payment.
            </p>
            <p> Have a great day!</p>
            <div className="py-10 text-center">
              <Link
                href="/"
                prefetch
                className="px-12 bg-indigo-600 rounded-md hover:bg-indigo-500 text-white font-semibold py-3"
              >
                GO BACK
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
