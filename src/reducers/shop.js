//import * as types from '../constants/ActionTypes'

export default function shopify ( 
  state = {
            shopItems:[],
            shopByID:{},
            active: null
            
          }, action) {

  switch (action.type) {

      case 'RECEIVE_SHOP':
      //console.log("receiving", action)
      return { 
        ...state, 
        shopItems: action.shopItems
      }

      case 'RECEIVE_SHOPBYID':

      return {
        ...state, 
        shopByID: action.shop.reduce((retVal, curr) => 
        {
          retVal[curr.id] = curr
          return retVal

        }, {})
      
    }

      default:
      return state

  }
}