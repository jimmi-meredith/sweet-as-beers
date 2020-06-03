export const ADD_TO_CART = 'ADD_TO_CART'

const addToCart = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // returns an array with the current state, plus a new object including the details of item added
      return [...state, { id: action.id, name: action.name, quantity: 1 }]
  }
}

export default addToCart
