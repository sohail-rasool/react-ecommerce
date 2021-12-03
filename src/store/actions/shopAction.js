import shopActionTypes from '../constants/shopConstants';

export const updateCollections = (collectionsMap) => {
  return {
    type: shopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap,
  };
};
