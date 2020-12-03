import { CHANGE_CART_ITEM_COUNT } from '../types/ProductsActionTypes';

const initialState = {
  cartCount: 1,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CART_ITEM_COUNT:
      return {
        ...state,
        cartCount: action.cartCount,
      };
    default:
      return state;
  }
};

export default productReducer;
