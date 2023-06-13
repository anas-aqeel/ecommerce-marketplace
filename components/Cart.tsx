'use client'
import {
  Dispatch,
  Fragment,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { urlForImage } from '../sanity/lib/image'
import { useAuth } from '@clerk/nextjs'
import { useToast } from './ui/use-toast'
import { Loader2 } from 'lucide-react'
import { CARTCONTEXT } from './section/CartContext'
import { _deleteFromCart } from '../lib/cart'
import Image from 'next/image'

export default function Cart({
  openPop,
  setOpenPop,
}: {
  openPop: boolean
  setOpenPop: Dispatch<SetStateAction<boolean>>
}) {
  let { toast } = useToast()
  let {
    cart: { cartItems },
    setCart,
  } = useContext(CARTCONTEXT)
  let [total, setTotal] = useState(0)
  let { userId } = useAuth()

  let handleClick = (product_id: string) => {
    setCart({
      type: 'REMOVE_FROM_CART',
      payload: {
        function: () => {
          _deleteFromCart(product_id, userId, toast, setCart)
        },
        product_id,
      },
    })
  }

  useEffect(() => {
    setTotal(
      Number(
        Math.round(
          cartItems?.reduce(
            (acc: any, product: any) =>
              acc + product.price * product.cart.quantity,
            0,
          ) * 100,
        ) / 100,
      ),
    )
  }, [cartItems])

  return (
    <Transition.Root show={openPop} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpenPop}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden z-50">
          <div className="absolute inset-0 overflow-hidden z-50">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md z-50">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpenPop(false)}
                          >
                            <span className="sr-only">Close panel</span>X
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {cartItems &&
                              cartItems.map((product: any) => (
                                <li key={product._id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <Image
                                      height={"200"}
                                      width={"200"}
                                      src={urlForImage(
                                        product.images[0],
                                      )?.url()}
                                      alt={'Product Image'}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <a href={product.href}>
                                            {product.name}
                                          </a>
                                        </h3>
                                        <p className="ml-4">{product.price}</p>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500">
                                        Yellow
                                      </p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <p className="text-gray-500">
                                        Qty {product.cart.quantity}
                                      </p>

                                      <div className="flex">
                                        <button
                                          onClick={() =>
                                            handleClick(product._id)
                                          }
                                          type="button"
                                          className="group inline-flex items-center px-4 py-2 cursor-pointer focus:cursor-not-allowed border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                          <Loader2 className="animate-spin h-5 w-5 mr-2 text-white hidden group-focus:flex" />
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${total}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setOpenPop(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
