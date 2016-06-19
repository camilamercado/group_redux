import * as c from 'constants'
const portfolioItems = (state = [], action) => {
  
  switch (action.type) {
    
    case 'ADD_PORTFOLIO_ITEM':
    	
    console.log("reducer firing", action)
      
      return [
        ...state,
        action.portfolioItem,
      ]

    default:
      return state
  }
}

export default portfolioItems
