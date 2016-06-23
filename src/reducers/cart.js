export default function cart ( 
  state = {
            cart: []    
          }, action) {

  switch (action.type) {

      case 'RECEIVE_CART':
      console.log("receiving", action)
      return { 
        cart: action.cart
      }

      default:
      return state

  }
}