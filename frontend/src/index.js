import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Homepage from './Landing_page/Home/HomePage';
import Signup from './Landing_page/signup/Signup';


import Aboutpage from './Landing_page/about/Aboutpage';



import Supportpage from './Landing_page/support/Supportpage';
import Navbar from './Landing_page/Navbar';
import Footer from './Landing_page/Footer';
import NotFound from './Landing_page/NotFound';

import Productspage from "./Landing_page/product/Productspage";
import Pricingpage from "./Landing_page/pricing/Pricingpage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
  
  <Routes>
    <Route path="/" element={<Homepage/>}/>

   
   
     <Route path="/signup" element={<Signup/>}/>


     <Route path="/About" element={<Aboutpage/>}/>


<Route path="/pricing" element={<Pricingpage/>}/>
<Route path="/support" element={<Supportpage/>}/>
  <Route path="*" element={<NotFound/>}/>
  <Route path="/product" element={<Productspage />} />
  
  </Routes>
   <Footer/>
  </BrowserRouter>
);


