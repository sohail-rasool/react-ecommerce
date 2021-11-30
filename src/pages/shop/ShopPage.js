import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Collection from '../collection/CollectionPage';

import CollectionOverview from '../../components/CollectionOverview/CollectionOverView';

const ShopPage = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<CollectionOverview />} />
        <Route exact path=':collectionId' element={<Collection />} />
      </Routes>
    </>
  );
};

export default ShopPage;
