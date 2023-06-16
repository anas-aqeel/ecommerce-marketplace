import React from 'react'

const CartSkeleton = () => {
  return (
    <>
      <div className="bg-white p-2 sm:p-4 h-auto   flex flex-col sm:flex-row gap-5 select-none ">
        <div className="h-24  w-24 rounded-xl bg-gray-200 animate-pulse" />
        <div className="flex flex-col flex-1 gap-3 sm:p-2">
          <div className="flex flex-1 flex-col gap-1">
            <div className="bg-gray-200 w-full animate-pulse h-1 rounded-2xl" />
            <div className="bg-gray-200 w-full animate-pulse h-1 rounded-2xl" />
            <div className="bg-gray-200 w-full animate-pulse h-1 rounded-2xl" />
            <div className="bg-gray-200 w-full animate-pulse h-1 rounded-2xl" />
            <div className="bg-gray-200 w-full animate-pulse h-1 rounded-2xl" />
          </div>
          <div className="mt-auto flex items-center gap-3">
            <div className="bg-gray-200 w-14 h-2 animate-pulse rounded-lg" />
            <div className="bg-gray-200 w-20 h-8 animate-pulse rounded-lg ml-auto" />
          </div>
        </div>
      </div>
    </>
  )
}

export default CartSkeleton
