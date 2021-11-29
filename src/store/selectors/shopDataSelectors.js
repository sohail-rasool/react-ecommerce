import { createSelector } from 'reselect';

const selectShopData = (state) => state.shop;

export const selectShopDataSections = createSelector(
  [selectShopData],
  (shop) => shop.collesctions
);
