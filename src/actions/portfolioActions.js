import * as c from '../constants.js'
import fetch from 'isomorphic-fetch'

export function initPortfolio (item) {
return (dispatch) => {
   //console.log("INITIATING PORTFOLIO >>>", item)
   return dispatch({ type: 'ADD_PORTFOLIO_ITEM', 'portfolioItem': item})
  }
}