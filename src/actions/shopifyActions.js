import * as types from '../constants.js'
import fetch from 'isomorphic-fetch'

export function initCart(cart) {
  return (dispatch) => {
    return { 'type': 'INIT_CART', 'cart': cart}
  }
}

