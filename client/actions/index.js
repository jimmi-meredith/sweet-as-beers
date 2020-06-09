// Setting type to not equal a string
export const NAVIGATE = 'NAVIGATE'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const UPDATE_QUANTITIES = 'UPDATE_QUANTITIES'

export const navigate = target => {
  return {
    type: NAVIGATE,
    // target being the page to show depending on the sate
    target // 'beerList' or 'cart'
  }
}

export const addToCart = (id, name) => {
  return {
    type: ADD_TO_CART,
    // id and name of item added to cart
    id,
    name
  }
}

export const removeFromCart = id => {
  return {
    type: REMOVE_FROM_CART,
    id
  }
}

// passing the whole cart as the update will update all quantities across the cart
export const updateQuantities = cart => {
  return {
    type: UPDATE_QUANTITIES,
    cart
  }
}
