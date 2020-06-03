import React from 'react'
import { connect } from 'react-redux'

// importing addToCart action for mapDispatchToProps
import { addToCart } from '../actions'

import BeerListItem from './BeerListItem'

const BeerList = props => {
  // destructuring so props isn't needed to be typed each time
  const beers = props.beers
  return (
    <div className='beerlist'>
      <p className='welcome'>
        Welcome! Please select from our delicious selection and don't hesitate to let us know if we can answer any of your questions.
      </p>
      {beers.map(beer => {
        return (
          // listing each beer inside props as it's own item
          <BeerListItem key={beer.id} beer={beer} />
        )
      })}
    </div>
  )
}

// accessing the redux store to use the beers state
const mapStateToProps = state => {
  return {
    beers: state.beers
  }
}

// accessing the actions to pass the actions down as props
const mapDispatchToProps = dispatch => {
  return {
    // accessing the addToCart action to use
    addToCart: (id) => {
      dispatch(addToCart(id))
    }
  }
}

// connecting this component to the redux store
export default connect(mapStateToProps, mapDispatchToProps)(BeerList)
