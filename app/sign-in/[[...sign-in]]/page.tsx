'use client'
import { SignIn } from '@clerk/nextjs'
export default function Component() {
  return (
    <>
    <div className='flex min-h-screen justify-center items-center'>

      <SignIn />
    </div>
    </>
  )
}
