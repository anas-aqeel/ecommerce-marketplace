"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@clerk/nextjs'

const Page = () => {
  let auth = useAuth()
  let router = useRouter()

  if (auth.isSignedIn) {
    return (
      <>
        {/* <ProfileCard user={auth.} /> */}
        <button onClick={() =>auth.signOut()}>Sign out</button>
      </>
    )
  }
  else{
    router.push('/sign-in')
    return<></>
  }
 
}

export default Page
