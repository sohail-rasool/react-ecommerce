import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import googleAuthAction from './store/actions/googleAuthAction';

import firebase, {
  createUserProfileDocument,
} from './services/firebase/firebase.utils';

import AppLayout from './layout/AppLayout';

// Pages
import HomePage from './pages/HomePage';
import ShopPage from './pages/shop/ShopPage';
import NotFound from './pages/404/index';
import SiginIn from './pages/auth/SiginIn';
import Signup from './pages/auth/SignUp';
function App() {
  const user = useSelector((state) => state.googleUser.currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unSubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        userRef.onSnapshot((snapshot) => {
          dispatch(googleAuthAction({ id: snapshot.id, ...snapshot.data() }));
        });
      } else {
        dispatch(googleAuthAction(user));
      }
    });
    return () => unSubscribe();
  }, [dispatch]);

  return (
    <>
      <AppLayout>
        <Routes>
          <Route
            exact
            path='/'
            element={user ? <HomePage /> : <Navigate replace to='/signin' />}
          />
          <Route path='/shop' element={<ShopPage />} />
          <Route
            path='/signin'
            element={user ? <Navigate replace to='/' /> : <SiginIn />}
          />
          <Route
            path='/signup'
            element={user ? <Navigate replace to='/' /> : <Signup />}
          />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </AppLayout>
    </>
  );
}

export default App;
