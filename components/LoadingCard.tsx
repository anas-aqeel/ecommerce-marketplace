import React from 'react'

const LoadingCard = () => {
  return (
    <>
      {/* component */}
      <div className="bg-white p-2 sm:p-4  rounded-2xl shadow-lg flex flex-col  gap-5 select-none ">
        <div className="h-52  w-full rounded-xl bg-gray-200 animate-pulse" />
        <div className="flex flex-col flex-1 gap-5 sm:p-2">
          <div className="flex flex-1 flex-col gap-3">
            <div className="bg-gray-200 w-full animate-pulse h-2 rounded-2xl" />
            <div className="bg-gray-200 w-full animate-pulse h-2 rounded-2xl" />
            <div className="bg-gray-200 w-full animate-pulse h-2 rounded-2xl" />
            <div className="bg-gray-200 w-full animate-pulse h-2 rounded-2xl" />
          </div>
          <div className="mt-auto flex gap-3">
            <div className="bg-gray-200 w-20 h-8 animate-pulse rounded-full" />
            <div className="bg-gray-200 w-20 h-8 animate-pulse rounded-full" />
            <div className="bg-gray-200 w-20 h-8 animate-pulse rounded-full ml-auto" />
          </div>
        </div>
      </div>
    </>
  )
}

export default LoadingCard
