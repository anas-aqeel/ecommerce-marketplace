'use client'
import { useSession, signIn, signOut, getProviders } from 'next-auth/react'

import Auth from '../../components/AuthCard'
import ProfileCard from '../../components/ProfileCard'
import { useRouter } from 'next/navigation'

export default function Component() {
  const { data: session } = useSession()
  let router = useRouter()
  if (session != undefined) {
    router.push("/")
  }
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
