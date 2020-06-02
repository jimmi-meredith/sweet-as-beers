import React from 'react'

import Header from './Header'

// importing beers data for props
import beersObject from '../../data/beers'
import BeerList from './BeerList'

// This might need to be turned into a stateful (class-based) component
const App = () => (
  <div className='app'>
    <Header />
    {/* passing in the data as props (it is the full object, and beers is the array inside it) */}
    <BeerList beers={beersObject.beers}/>
  </div>
)

export default App
