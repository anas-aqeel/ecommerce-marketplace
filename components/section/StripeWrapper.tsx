import React, { useEffect, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'

const StripeWrapper = () => {
  const [stripePromise, setSripePromise] = useState<any>(null)
  const [clientSecret, setClientSecret] = useState('')
  useEffect(() => {
    setSripePromise(loadStripe(process.env.STRIPE_PUBLISHABLE_KEY || ''))
  })
  return <div>StripeWrapper</div>
}

export default StripeWrapper
