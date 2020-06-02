import React from 'react'

import Header from './Header'

import beers from '../../data/beers'
import BeerList from './BeerList'

// This might need to be turned into a stateful (class-based) component
const App = () => (
  <div className='app'>
    <Header />
    <BeerList beers={beers} />
  </div>
)

export default App
