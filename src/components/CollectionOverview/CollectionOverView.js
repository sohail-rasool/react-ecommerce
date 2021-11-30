import React from 'react';
import { useSelector } from 'react-redux';
import { selectShopDataCollections } from '../../store/selectors/shopDataSelectors';
import CollectionPreview from '../CollectionPreview/CollectionPreview';

const CollectionOverview = () => {
  const state = useSelector((state) => state);
  const shopData = selectShopDataCollections(state);
  return (
    <>
      <h1 className='mb-3'>Collections</h1>
      {shopData.map((item) => (
        <CollectionPreview key={item.id} {...item} />
      ))}
    </>
  );
};

export default CollectionOverview;
