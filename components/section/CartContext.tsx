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

export const CARTCONTEXT = createContext<any>({})

const initialCartState = {
  cartItems: [],
  state: 'default',
}

const CartContext = ({ children }: any) => {
  let { userId } = useAuth()
  let [products, setProducts] = useState<any>("loading")
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
    console.log(response, 'response')
  }
  useEffect(() => {
    fetchProducts()
    fetchCartProducts()
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
