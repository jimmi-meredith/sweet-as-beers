import { combineReducers } from 'redux'

import currentPage from './navigation'

// import all reducers so that they can all be accessed from one combined reducer
export default combineReducers({
  currentPage
})
