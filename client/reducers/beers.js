import beersData from '../../data/beers'

const initialState = beersData.beers

const beers = (state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

export default beers
