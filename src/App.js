import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';

import firebase from './services/firebase/firebase.utils';

// Pages
import HomePage from './pages/HomePage';
import ShopPage from './pages/shop/ShopPage';
import NotFound from './pages/404/index';
import SiginIn from './pages/auth/SiginIn';
import Signup from './pages/auth/SignUp';
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  console.log(user);

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
