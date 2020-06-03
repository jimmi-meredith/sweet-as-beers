// Setting type to not equal a string
export const NAVIGATE = 'NAVIGATE'

export const navigate = target => {
  return {
    type: NAVIGATE,
    // target being the page to show depending on the sate
    target // 'beerList' or 'cart'
  }
}
