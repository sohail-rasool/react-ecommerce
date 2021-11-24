import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import { useDispatch } from 'react-redux';
import googleAuthAction from './store/actions/googleAuthAction';
import firebase, {
  createUserProfileDocument,
} from './services/firebase/firebase.utils';

// Pages
import HomePage from './pages/HomePage';
import ShopPage from './pages/shop/ShopPage';
import NotFound from './pages/404/index';
import SiginIn from './pages/auth/SiginIn';
import Signup from './pages/auth/SignUp';
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
          <Route exact path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/signin' element={<SiginIn />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </AppLayout>
    </>
  );
}

export default App;
