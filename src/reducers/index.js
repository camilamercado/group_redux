import {combineReducers} from 'redux'
import app from './app'
import shop from './shop'
import cart from './cart'
import portfolioItems from './portfolioItems'

export default combineReducers({
  app,
  portfolioItems,
  shop,
  cart
})
