import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartDropDown = createSelector(
  [selectCart],
  (cart) => cart.cartDropDown
);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumlatorQuantityValue, cartItem) =>
        accumlatorQuantityValue + cartItem.quantity,
      0
    )
);

export const selectCartTotalAmount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumlatorQuantityValue, cartItem) =>
        accumlatorQuantityValue + cartItem.quantity * cartItem.price,
      0
    )
);
