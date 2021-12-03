import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { updateCollections } from '../../store/actions/shopAction';

import {
  firestore,
  convertCollectionSnapshotToMap,
} from '../../services/firebase/firebase.utils';

import CollectionPage from '../collection/CollectionPage';

import CollectionOverview from '../../components/CollectionOverview/CollectionOverView';
import Loader from '../../components/Loader/Loader';

const ShopPage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertCollectionSnapshotToMap(snapshot);
      dispatch(updateCollections(collectionMap));
      setLoading(false);
    });
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route
          exact
          path='/'
          element={loading ? <Loader /> : <CollectionOverview />}
        />
        <Route
          exact
          path=':collectionId'
          element={loading ? <Loader /> : <CollectionPage />}
        />
      </Routes>
    </>
  );
};

export default ShopPage;
