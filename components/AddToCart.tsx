'use client'
import { useAuth } from '@clerk/nextjs'
import React, { useContext, useEffect, useState } from 'react'
import { useToast } from './ui/use-toast'
import { CARTCONTEXT } from './section/CartContext'
import { _addToCart } from '../lib/cart'
import { AddButton, AuthErrorButton, LoadingButton } from './Buttons'

const AddToCart = ({
  productId,
  quantity,
  product,
}: {
  productId: string
  quantity: number
  product: any
}) => {
  let auth = useAuth()
  let { toast } = useToast()
  let [currState, setCurrState] = useState('default')
  let {
    setCart,
    cart: { state },
  } = useContext(CARTCONTEXT)

  let addToCart = () => {
    setCart({
      type: 'ADD_TO_CART',
      payload: {
        function: async () => {
          try {
            setCurrState('loading')
            await _addToCart(toast, auth, productId, quantity, setCart, product)
            setCurrState('default')
          } catch (error) {
            console.log(error)
          }
        },
      },
    })
    setCurrState(state)
  }

  if (auth.userId) {
    if (currState == 'loading') {
      return <LoadingButton onClick={() => {}} />
    } else {
      return <AddButton onClick={addToCart} />
    }
  } else {
    return <AuthErrorButton />
  }
}

export default AddToCart
