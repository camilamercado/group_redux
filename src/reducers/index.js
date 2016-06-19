import {combineReducers} from 'redux'
import shopify from './shopify'
import portfolioItems from './portfolioItems'

export default combineReducers({
  portfolioItems,
  shopify
})
