import React from 'react';
import { useSelector } from 'react-redux';
import { selectShopDataSections } from '../../store/selectors/shopDataSelectors';
import CollectionPreview from '../CollectionPreview/CollectionPreview';

const CollectionOverview = () => {
  const state = useSelector((state) => state);
  const shopData = selectShopDataSections(state);
  return (
    <>
      {shopData.map((item) => (
        <CollectionPreview key={item.id} {...item} />
      ))}
    </>
  );
};

export default CollectionOverview;
