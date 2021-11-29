import { createSelector } from 'reselect';

const selectShopData = (state) => state.shopData;

export const selectShopDataSections = createSelector(
  [selectShopData],
  (shopData) => shopData.sections
);
