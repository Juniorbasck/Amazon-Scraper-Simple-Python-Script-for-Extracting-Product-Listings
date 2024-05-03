import React from 'react';
import Header from './components/Header';
import SearchPage from './components/SearchPage'
import Footer from './components/Footer'
import Product from './components/Products';

function App() {
  return (
      <div className="flex flex-col min-h-screen">  
      <Header />
      <SearchPage className="flex-1" />
      <Product />
  </div>
  );
}

export default App;
