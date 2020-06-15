import { NAVIGATE } from '../actions'

// setting the default state to be the 'beerList' page
const currentPage = (state = 'beerList', action) => {
  switch (action.type) {
    // if the action called is NAVIGATE, then update the target to change the state in the store
    case NAVIGATE:
      return action.target
    default:
      return state
  }
}

export default currentPage
