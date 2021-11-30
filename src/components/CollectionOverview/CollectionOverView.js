import React from 'react';
import { useSelector } from 'react-redux';
import { selectCollectionForPreview } from '../../store/selectors/shopDataSelectors';
import CollectionPreview from '../CollectionPreview/CollectionPreview';

const CollectionOverview = () => {
  const state = useSelector((state) => state);
  const shopData = selectCollectionForPreview(state);
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
