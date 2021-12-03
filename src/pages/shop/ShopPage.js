import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { updateCollections } from '../../store/actions/shopAction';

import {
  firestore,
  convertCollectionSnapshotToMap,
} from '../../services/firebase/firebase.utils';

import Collection from '../collection/CollectionPage';

import CollectionOverview from '../../components/CollectionOverview/CollectionOverView';
const ShopPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertCollectionSnapshotToMap(snapshot);
      dispatch(updateCollections(collectionMap));
      console.log(collectionMap);
    });
  }, []);
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
