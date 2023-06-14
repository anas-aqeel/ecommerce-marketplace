import { Ban, Loader2, ShoppingCartIcon } from 'lucide-react'
import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip'

export const LoadingButton = ({ onClick }: any) => {
  return (
    <button
      onClick={onClick}
      disabled
      className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 pl-4 focus:outline-none rounded hover:scale-110 transition-all"
    >
      <Loader2 className="animate-spin h-5 w-5 mr-3 text-white" />
      Processing...
    </button>
  )
}

export const AddButton = ({ onClick }: any) => {
  return (
    <button
      onClick={onClick}
      className="flex ml-auto text-white bg-blue-500 border-0 py-2 px-6 pl-4 focus:outline-none rounded hover:scale-110 transition-all"
    >
      <ShoppingCartIcon className="text-white mr-2" />
      Add to cart
    </button>
  )
}

export const AuthErrorButton = ({}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={() => {}}
            disabled
            className="flex ml-auto text-black border border-red-600  cursor-not-allowed py-2 px-6 pl-4 focus:outline-none rounded hover:scale-110 transition-all"
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
  )
}

