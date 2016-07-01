//import * as types from '../constants/ActionTypes'

export default function shopify ( 
  state = {
            shopItems:[],
            shopByID:{},
            selectedItem: {}
            
          }, action) {

  switch (action.type) {

      case 'RECEIVE_SHOP':
      //console.log("receiving", action)
      return { 
        ...state, 
        shopItems: action.shopItems
      }

      case 'RECEIVE_SHOPBYID':
      console.log("selecting shopBYID!", action)
      return {
        ...state, 
        shopByID: action.shop.reduce((retVal, curr) => 
        {
          retVal[curr.id] = curr
          return retVal

        }, {})
      
    }

    case 'CHANGE_NAME':
    let keyVal = Object.keys(state.shopByID)[0]
    let currVal = state.shopByID[keyVal]
    let newVal = {...currVal, title: "NUNUMEW2"}
    let newShopByID = {...state.shopByID, [keyVal]: newVal }
    
    return {
      ...state,
      shopByID: newShopByID
    }

      default:
      return state

  }
}