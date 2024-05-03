
export const ADD_TO_BASKET="ADD_TO_BASKET"
export const REMOVE_FROM_BASKET="REMOVE_FROM_BASKET"

export const addToBasket = (product) => {
   return {
      type: ADD_TO_BASKET,
      payload:product
   }
}

export const removeFromBasket = (product) => {
   return {
      type: REMOVE_FROM_BASKET,
      payload:product
   }
}