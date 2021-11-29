import React from 'react';
import { useSelector } from 'react-redux';
import { selectShopDataSections } from '../../store/selectors/shopDataSelectors';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

const ShopPage = () => {
  const state = useSelector((state) => state);
  const shopData = selectShopDataSections(state);
  return (
    <>
      <h1 className='mb-3'>Collections</h1>
      {shopData.map((item) => (
        <CollectionPreview key={item.id} {...item} />
      ))}
    </>
  );
};

export default ShopPage;
