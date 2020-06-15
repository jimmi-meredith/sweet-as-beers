import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITIES, CLEAR_CART } from '../actions'

function getNewCart (cart, id) {
  // set default item to false as if it doesn't exist in the cart already
  let exists = false
  // map over the cart array to see if there are any items with an id that matches the newly added item
  const newCart = cart.map(item => {
    if (item.id === id) {
      // add 1 to quantity if item already esists in the array
      item.quantity += 1
      // set exists to true if it matches
      exists = true
    }
    // return item as normal if it doesnb't match any in the array
    return item
  })

  // if item exists already in the array, then add quantity to the item as shown above
  if (exists) {
    return newCart
  } else {
    // if item doesn't already exist, then add it to the array with default attributes
    newCart.push({ id: id, quantity: 1 })
    // then return the newCart
    return newCart
  }
}

const cart = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // returns an array with the current state, plus a new object including the details of item added
      return getNewCart(state, action.id)
    case REMOVE_FROM_CART:
      // keep all items where the action id doesn't match the item's id
      return state.filter(item => item.id !== action.id)
    case UPDATE_QUANTITIES:
      // returns the updated results of the cart
      return action.cart
    case CLEAR_CART:
      return []
    default:
      return state
  }
}

export default cart
