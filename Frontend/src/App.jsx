import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './component/pages/Home/Homepage';
import Login from "./component/pages/Auth/Login";
import ProductGrid from "./component/pages/Product/ProductGrid";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <Router>
      <Routes>
        <Route path ="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
         <Route path="/productgrid" element={<ProductGrid/>} />
      </Routes>
    </Router>
    
  )
}

export default App;
