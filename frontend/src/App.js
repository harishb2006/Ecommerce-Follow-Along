import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import  LoginPage  from './Routes.js';
import { LoginPage,SignupPage } from './Routes.js';

import {Home} from './Routes.js';
import "./App.css";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={< Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;