import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';

// Pages
import HomePage from './pages/HomePage';
import ShopPage from './pages/shop/ShopPage';
import NotFound from './pages/404/index';
import SiginIn from './pages/auth/SiginIn';
import Signup from './pages/auth/SignUp';
function App() {
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
