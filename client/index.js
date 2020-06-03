import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// importing the create store function for from redux
// First step for redux and super important
import { createStore } from 'redux'

// importing all of the reducers from reducers file
import reducers from './reducers'
import App from './components/App'

// Creating the store function, which passes the reducers from above
const store = createStore(reducers,
  // this is how we wire in the devtools in the browser (also important)
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

document.addEventListener('DOMContentLoaded', () => {
  render(
    // passing the sotre as props into provider so it can be used in everything in the app
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})
