// Setting type to not equal a string
export const NAVIGATE = 'NAVIGATE'
export const ADD_TO_CART = 'ADD_TO_CART'

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
    id,
    name
  }
}
