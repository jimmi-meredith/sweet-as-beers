import beersData from '../../data/beers'

// making the beers array avaialable as initialState
const initialState = beersData.beers

const beers = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default beers
