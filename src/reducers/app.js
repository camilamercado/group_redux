//import * as types from '../constants/ActionTypes'

export default function shopify ( 
  state = {
            link: null    
          }, action) {

  switch (action.type) {

      case 'SET_LINK':
      console.log("receiving", action)
      return { 
       
        link: action.link,
       
      }
      
      default:
      return state

  }
}