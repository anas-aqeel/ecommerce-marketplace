'use client'
import { useAuth } from '@clerk/nextjs'
import { ShoppingCartIcon, Loader2, Ban } from 'lucide-react'
import React, { useState } from 'react'
import { ToastAction } from './ui/toast'
import { useToast } from './ui/use-toast'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip'

const AddToCart = ({
  productId,
  quantity,
}: {
  productId: string
  quantity: number
}) => {
  let auth = useAuth()
  let { toast } = useToast()
  let [currState, setCurrState] = useState('default')

  let handleClick = async () => {
    if (auth.userId != undefined) {
      try {
        setCurrState('loading')
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
        if (response.ok) {
          setCurrState('default')
          toast({
            title: 'Action: Add to Cart ',
            description: `${productId}, is added to the cart`,
            action: <ToastAction altText="Go to cart">Cart</ToastAction>,
          })
        }
      } catch (e) {
        toast({
          title: 'Error: Add to Cart ',
          description: `Error while adding to cart`,
          action: <ToastAction altText="Go to cart">Retry</ToastAction>,
        })
      }
    } else {
      setCurrState('error')
    }
  }
  return (
    <>
      {currState == 'default' ? (
        <button
          onClick={handleClick}
          className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 pl-4 focus:outline-none rounded hover:scale-110 transition-all"
        >
          <ShoppingCartIcon className="text-white mr-2" />
          Add to cart
        </button>
      ) : currState == 'loading' ? (
        <button
          onClick={handleClick}
          disabled
          className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 pl-4 focus:outline-none rounded hover:scale-110 transition-all"
        >
          <Loader2 className="animate-spin h-5 w-5 mr-3 text-white" />
          Processing...
        </button>
      ) : (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={handleClick}
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
