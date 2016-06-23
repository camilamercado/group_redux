import * as types from '../constants.js'
import fetch from 'isomorphic-fetch'


export function initShopClient(e) {
  return dispatch => {
    e.fetchAllProducts()
      .then(function(products) {
        let items = []
        products.map(function(products){
          items.push(products)
        })
        receiveShop(items, dispatch)
      })
      .catch(function (x) {
        console.log('Request failed', x);
      })    
  }
}

function receiveShop(e, dispatch) {

    //console.log("shop items", e, dispatch)
    dispatch({'type': 'RECEIVE_SHOPBYID', 'shop': e})
    return dispatch({ 'type': 'RECEIVE_SHOP', 'shopItems': e})
  
}

export function selectItem(item) {

    console.log("selecting action >>",item)
    return { 'type': 'SELECT_ITEM', 'item': item}
  
}
