import {combineReducers} from 'redux'
import app from './app'
import shopify from './shopify'
import portfolioItems from './portfolioItems'

export default combineReducers({
  app,
  portfolioItems,
  shopify
})
