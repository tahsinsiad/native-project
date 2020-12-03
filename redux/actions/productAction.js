import { CHANGE_CART_ITEM_COUNT } from '../types/ProductsActionTypes';

export function changeCartCount(cartCount) {
  return {
    type: CHANGE_CART_ITEM_COUNT,
    cartCount,
  };
}
