//import * as types from '../constants/ActionTypes'

export default function shopify ( 
  state = {
            shop:[{},{},{}],
            cart: false,
            checkoutURL : false,     
          }, action) {

  switch (action.type) {

      case 'RECEIVE_SHOP':
      //console.log("receiving", action)
      return  { 
        shop: action.shop,
      }

      default:
      return state

  }
}