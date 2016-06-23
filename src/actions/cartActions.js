import * as types from '../constants.js'
import fetch from 'isomorphic-fetch'


export function initCart(e) {
  return dispatch => {
  let cart
  e.createCart().then(function (newCart) {
    cart = newCart
    dispatch(receiveCart(cart))
  })
  }
}

function receiveCart(cart) {
	console.log("receiving cart!")
    return { 'type': 'RECEIVE_CART', 'cart': cart}
}


export function changeName() {
	console.log("receiving name!")
    return { 'type': 'CHANGE_NAME'}
}
