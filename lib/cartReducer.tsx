const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      action.payload.function()
      return state

    case 'REMOVE_FROM_CART':
      action.payload.function(action.payload.product_id)

      return state

    case 'SET_CART_PRODUCTS':
      return {
        ...state,
        cartItems: action.payload.cartItems,
      }
    case '_ADD_TO_CART':
      let oldCart = state.cartItems.find(
        (cartItem: any) =>
          cartItem._id === action.payload.newCartItem.cart.product_id,
      )
      if (oldCart != null || oldCart != undefined) {
        oldCart.cart.quantity += action.payload.newCartItem.cart.quantity
        return {
          ...state,
          cartItems: [
            ...state.cartItems.filter((item: any) => item._id != oldCart._id),
            oldCart,
          ],
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload.newCartItem],
        }
      }
    case '_REMOVE_FROM_CART':
      let filteredItems = state.cartItems.filter(
        (item: any) => item._id != action.payload.product_id,
      )
      return {
        ...state,
        cartItems: filteredItems,
      }
    default:
      return state
  }
}

export default reducer
