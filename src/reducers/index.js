import * as c from 'constants'
const portfolioItems = (state = [], action) => {
  switch (action.type) {
    case c.ADD_PORTFOLIO_ITEM:
      return [
        ...state,
        action.portfolioItem
      ]

    default:
      return state
  }
}

export default portfolioItems
