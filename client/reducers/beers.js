import beersData from '../../data/beers'

// making the beers array avaialable as initialState
const initialState = beersData.beers

// setting the beers initialstate data to be used as global state from the redux store
const beers = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default beers
