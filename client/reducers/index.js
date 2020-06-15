import { combineReducers } from 'redux'

import currentPage from './navigation'
import beers from './beers'
import cart from './cart'
import order from './order'

// import all reducers so that they can all be accessed from one combined reducer
export default combineReducers({
  currentPage,
  beers,
  cart,
  order
})
