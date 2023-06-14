import { ToastAction } from '../components/ui/toast'

export const _addToCart = async (
  toast: any,
  auth: any,
  productId: string,
  quantity: number,
  setCart: any,
  product: any,
) => {
  if (auth.userId != undefined) {
    try {
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
        toast({
          title: 'Action: Add to Cart ',
          description: `${productId}, is added to the cart`,
          action: <ToastAction altText="Go to cart">Cart</ToastAction>,
        })
        setCart({
          type: '_ADD_TO_CART',
          payload: {
            newCartItem: {
              ...product,
              cart: {
                user_id: auth.userId,
                product_id: productId,
                quantity: quantity,
              },
            },
          },
        })
      }
    } catch (e) {
      toast({
        title: 'Error: Add to Cart',
        description: `Error while adding to cart`,
        action: <ToastAction altText="Go to cart">Retry</ToastAction>,
      })
      return false
    }
  } else {
    toast({
      title: 'Error: Authentication Required!',
      description: `Error while adding to cart`,
      action: <ToastAction altText="Go to cart">Sign in</ToastAction>,
    })
    return false
  }
}

export const _deleteFromCart = async (
  product_id: string,
  userId: any,
  toast: any,
  setCart: any,
) => {
  console.log(product_id, userId, toast, setCart, "delete from cart")
  try {
    let delReq = await fetch(`${process.env.NEXT_PUBLIC_HOST_NAME}/api/cart/delete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: userId,
        product_id: product_id,
      }),
    })

    if (delReq.ok) {
      toast({
        title: 'Action: Remove from Cart ',
        description: `Item successfully removed from cart`,
        action: <ToastAction altText="Go to cart">Add more</ToastAction>,
      })
      setCart({
        type: '_REMOVE_FROM_CART',
        payload: {
          product_id: product_id,
        },
      })
    } else {
      throw new Error('Internal Server Error')
    }
  } catch (e) {
    toast({
      title: 'Error: Remove from Cart ',
      description: `Error while Removing from cart`,
      action: <ToastAction altText="Go to cart">Retry</ToastAction>,
    })
    return false
  }
}
