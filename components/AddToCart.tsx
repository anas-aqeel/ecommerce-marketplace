'use client'
import { useAuth } from '@clerk/nextjs'
import { ShoppingCartIcon, Loader2, Ban } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { useToast } from './ui/use-toast'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip'
import { CARTCONTEXT } from './section/CartContext'
import { _addToCart } from '../lib/cart'

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
          setCurrState('loading')

          await _addToCart(toast, auth, productId, quantity, setCart, product)
          setCurrState('default')
        },
      },
    })
    setCurrState(state)
  }
  return (
    <>
      {currState == 'loading' ? (
        <button
          onClick={addToCart}
          disabled
          className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 pl-4 focus:outline-none rounded hover:scale-110 transition-all"
        >
          <Loader2 className="animate-spin h-5 w-5 mr-3 text-white" />
          Processing...
        </button>
      ) : currState == 'default' ? (
        <button
          onClick={() => {
            addToCart()
          }}
          className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 pl-4 focus:outline-none rounded hover:scale-110 transition-all"
        >
          <ShoppingCartIcon className="text-white mr-2" />
          Add to cart
        </button>
      ) : (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={addToCart}
                disabled
                className="flex ml-auto text-black border border-red-600  py-2 px-6 pl-4 focus:outline-none rounded hover:scale-110 transition-all"
              >
                <Ban className="text-red-700 mr-2" />
                Add to cart
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Authentication Required</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </>
  )
}

export default AddToCart
