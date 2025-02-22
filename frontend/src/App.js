import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import  LoginPage  from './Routes.js';
import { LoginPage,SignupPage,Home ,CreateProduct,Cart,MyProducts} from './Routes.js';


import "./App.css";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={< Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/create-product' element={<CreateProduct />} />

        <Route path='/create-product/:id' element={<CreateProduct />} />
        <Route path='/my-products' element={<MyProducts />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;