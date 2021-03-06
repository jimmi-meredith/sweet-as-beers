import React from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import BeerList from './BeerList'
import Cart from './Cart'
import Checkout from './Checkout'
import Admin from './Admin'

const App = props => (
  <div className='app'>

    <Header />

    {props.currentPage === 'beerList' && <BeerList />}
    {props.currentPage === 'cart' && <Cart />}
    {props.currentPage === 'checkout' && <Checkout />}
    {props.currentPage === 'admin' && <Admin />}

  </div>
)

// receviving the state from the redux store
const mapStateToProps = state => {
  // returns an object
  return {
    // returning the currentPage state to be used as props in this component
    currentPage: state.currentPage
  }
}

// connecting this App component to the redux store
export default connect(mapStateToProps)(App)
