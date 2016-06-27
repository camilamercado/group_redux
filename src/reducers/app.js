//import * as types from '../constants/ActionTypes'

export default function app ( 
  state = {
            link: "shop"    
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