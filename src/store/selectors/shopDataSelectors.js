import { createSelector } from 'reselect';

const selectShopData = (state) => state.shop;

export const selectShopDataCollections = createSelector(
  [selectShopData],
  (shop) => shop.collections
);

export const selectCollectionForPreview = createSelector(
  [selectShopDataCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectShopDataCollection = (params_url) =>
  createSelector([selectShopDataCollections], (items) => items[params_url]);
