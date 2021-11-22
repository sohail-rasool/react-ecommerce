import React from 'react';
import AppLayout from './layout/AppLayout';

// Pages
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <AppLayout>
        <HomePage />
      </AppLayout>
    </>
  );
}

export default App;
