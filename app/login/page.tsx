'use client'

import Auth from '../../components/AuthCard'
import ProfileCard from '../../components/ProfileCard'
import { useRouter } from 'next/navigation'

export default function Component() {
  return (
    <>
      <div className="h-[90vh] w-full  justify-center items-center flex">
        <div className="max-w-sm mx-auto ">
          <Auth />
        </div>
      </div>
    </>
  )
}
