'use client'
import { useAuth } from '@clerk/nextjs'
import { ShoppingCartIcon } from 'lucide-react'
import React, { useState } from 'react'
import AlertBar from './AlertBar'

const AddToCart = ({
  productId,
  quantity,
}: {
  productId: string
  quantity: number
}) => {
  let auth = useAuth()
  let [showAlert, setShowAlert] = useState<boolean>(false)
  let handleClick = async () => {
    if (auth.userId != undefined) {
      let response = await fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: auth.userId,
          product_id: productId,
          quantity: quantity,
        }),
      })
      setShowAlert(true)
    } else {
    }
  }
  return (
    <>
      {showAlert && (
        <AlertBar content="Product is added to your cart" isLoading={false} />
      )}
      <button
        onClick={handleClick}
        className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 pl-4 focus:outline-none rounded hover:scale-110 transition-all"
      >
        <ShoppingCartIcon className="text-white mr-2" />
        Add to cart
      </button>
    </>
  )
}

export default AddToCart
