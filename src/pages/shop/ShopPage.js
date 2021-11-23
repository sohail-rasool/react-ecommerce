import React from 'react';
import shopData from '../../data/shop-data';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

const ShopPage = () => {
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
