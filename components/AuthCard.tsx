'use client'

import {  signIn } from 'next-auth/react'
import { Button } from './ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { GithubIcon } from 'lucide-react'
import { useState } from 'react'

export default function Auth() {
  let [formValues, setFormValues] = useState({
    email: '',
    password: '',
  })
  let handleSubmit = () => {
    signIn("credentials", {
      email: formValues.email,
      password: formValues.password
    })
  }
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Create an account</CardTitle>
        <CardDescription>
          Enter your email below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-6">
          <Button
            variant="outline"
            onClick={() => {
              signIn('github')
            }}
          >
            <GithubIcon className="mr-2 h-4 w-4" />
            Github
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              signIn('google')
            }}
          >
            <GithubIcon className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="m@example.com"
            onChange={(e) => {
              setFormValues((current) => ({
                ...current,
                email: e.target.value,
              }))
            }}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            name="password"
            onChange={(e) => {
              setFormValues((current) => ({
                ...current,
                password: e.target.value,
              }))
            }}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleSubmit}>
          Create account
        </Button>
      </CardFooter>
    </Card>
  )
}
