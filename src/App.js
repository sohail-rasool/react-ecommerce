import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';

// Pages
import HomePage from './pages/HomePage';
import ItemDetail from './pages/ItemDetail/ItemDetail';

function App() {
  return (
    <>
      <AppLayout>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/shop' element={<ItemDetail />} />
          <Route path='/shop/:id' element={<ItemDetail />} />
        </Routes>
      </AppLayout>
    </>
  );
}

export default App;
