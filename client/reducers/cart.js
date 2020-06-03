export const ADD_TO_CART = 'ADD_TO_CART'

const addToCart = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // returns an array with the current state, plus a new object including the details of item added
      return getNewCart(state, action.id)
    default:
      return state
  }
}

function getNewCart (cart, id) {
  let exists = false
  const newCart = cart.map(item => {
    if (item.id === id) {
      item.quantity += 1
      exists = true
    }
    return item
  })

  if (exists) {
    return newCart
  } else {
    newCart.push({ id: id, quantity: 1 })
    return newCart
  }
}

export default addToCart
