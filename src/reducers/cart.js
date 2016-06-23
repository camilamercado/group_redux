export default function cart ( 
  state = {
            cart: [],
            mockCart: []    
          }, action) {

  switch (action.type) {

      case 'RECEIVE_CART':
      console.log("receiving", action)
      return { 
        ...state,
        cart: action.cart
      }

      case 'SELECT_ITEM':

      return {
        ...state,
        mockCart: state.mockCart.concat(action.item)
      }

      default:
      return state

  }
}