import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
import CheckOut from './pages/checkout/CheckOut';

function App() {
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
          {/* Home Page */}
          {/* <Route
            exact
            path='/'
            element={user ? <HomePage /> : <Navigate replace to='/signin' />}
          /> */}
          <Route exact path='/' element={<HomePage />} />
          {/* Shop Page */}
          <Route path='shop/*' element={<ShopPage />} />

          {/* CheckOut page */}
          <Route path='/checkout' element={<CheckOut />} />
          {/* signin */}
          <Route path='/signin' element={<SiginIn />} />
          {/* signup */}
          <Route path='/signup' element={<Signup />} />
          {/* NotFound page */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </AppLayout>
    </>
  );
}

export default App;
