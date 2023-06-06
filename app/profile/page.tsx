"use client"
import React from 'react'
import ProfileCard from '../../components/ProfileCard'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const page = () => {
  const { data: session } = useSession()
  let router = useRouter()

  if (session != undefined) {
    return (
      <>
        <ProfileCard user={session.user} />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  else{
    router.push('/login')
  }
 
}

export default page
