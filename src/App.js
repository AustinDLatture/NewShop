import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import CartPage from './components/CartPage';
import HomePage from './components/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={HomePage}/>
      <Route path="/cart" component={CartPage}/>
    </BrowserRouter>
  );   
}

export default App;
