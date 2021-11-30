import { createSelector } from 'reselect';

const COLLECTION_PARAMS_URL = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShopData = (state) => state.shop;

export const selectShopDataCollections = createSelector(
  [selectShopData],
  (shop) => shop.collections
);

export const selectShopDataCollection = (params_url) =>
  createSelector([selectShopDataCollections], (items) =>
    items.find((item) => item.id === COLLECTION_PARAMS_URL[params_url])
  );
