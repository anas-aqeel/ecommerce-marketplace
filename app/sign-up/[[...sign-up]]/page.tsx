"use client"
import { SignUp } from '@clerk/nextjs'
export default function Component() {
  return (
    <>
      <div className="flex min-h-screen justify-center items-center">
        <SignUp redirectUrl={'/sign-up'} />
      </div>
    </>
  )
}
