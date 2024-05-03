import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../type/basketType"

const initialState = {
   basketItems: []
}

export default function basketReducer(state = initialState, { type, payload }) {
   switch (type) {
      case ADD_TO_BASKET:
         let product = state.basketItems.find(c => c.product.id === payload.id)
         if (product) {
            product.quantity++;
            return {
               ...state
            }
         } else {
            return {
               ...state, basketItems: [...state.basketItems, { quantity: 1, product: payload }]
            }
         }

      case REMOVE_FROM_BASKET:
         return {
            ...state,
            basketItems: state.basketItems?.filer(c => c.product.id !== payload.id)
         }
      default:
         return state;
   }

}