export default async function Component() {
  const SignIn = (await import('@clerk/nextjs')).SignIn
  return (
    <>
      <div className="flex min-h-screen justify-center items-center">
       <SignIn />
      </div>
    </>
  )
}
