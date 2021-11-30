import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectShopDataCollection } from '../../store/selectors/shopDataSelectors';

const Collection = () => {
  const state = useSelector((state) => state);

  const location = useLocation();
  console.log(location);

  const { collectionId } = useParams();
  console.log(collectionId);

  const shopDataCollectionItem = selectShopDataCollection(collectionId)(state);
  console.log(shopDataCollectionItem);

  return <div>category</div>;
};

export default Collection;
