'use client'
import React, {
  createContext,
  use,
  useEffect,
  useReducer,
  useState,
} from 'react'
import reducer from '../../lib/cartReducer'
import { useAuth } from '@clerk/nextjs'
import { fetchProductById } from '../../sanity/lib/fetchProductsByIds'
import { fetchAllProducts } from '../../sanity/lib/fetchAllProducts'
import { usePathname } from 'next/navigation'

export const CARTCONTEXT = createContext<any>({})

const initialCartState = {
  cartItems: "loading",
  state: 'default',
}

const CartContext = ({ children }: any) => {
  let { userId } = useAuth()
  let pathname = usePathname()
  let [products, setProducts] = useState<any>('loading')
  const [state, dispatch] = useReducer(reducer, initialCartState)

  const fetchCartProducts = async () => {
    if (userId != null || userId != undefined) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_NAME}/api/cart/getByUserId`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_id: userId,
          }),
        },
      )
      const data = await response.json()
      const products = await fetchProductById(
        data.map((product: any) => product.product_id),
      )
      dispatch({
        type: 'SET_CART_PRODUCTS',
        payload: {
          source: 'Initial',
          cartItems: products.map((product: any, i: number) => ({
            ...product,
            cart: { ...data[i] },
          })),
        },
      })
    }
  }

  let fetchProducts = async () => {
    let response = await fetchAllProducts()
    setProducts(response)
  }
  useEffect(() => {
    fetchProducts()
    if (pathname != '/success') fetchCartProducts()
  }, [useAuth().userId])

  return (
    <CARTCONTEXT.Provider
      value={{
        products: products,
        cart: state,
        setCart: dispatch,
      }}
    >
      {children}
    </CARTCONTEXT.Provider>
  )
}

export default CartContext
