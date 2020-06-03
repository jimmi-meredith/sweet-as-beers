import React from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import BeerList from './BeerList'
import Cart from './Cart'

// importing beers data for props
import beersObject from '../../data/beers'

// This might need to be turned into a stateful (class-based) component
const App = props => (
  <div className='app'>
    <Header />
    {/* passing in the data as props (it is the full object, and beers is the array inside it) */}
    {props.currentPage === 'beerList'
      ? <BeerList beers={beersObject.beers}/>
      : <Cart />}
  </div>
)

const mapStateToProps = state => {
  return {
    currentPage: state.currentPage
  }
}

export default connect(mapStateToProps)(App)
