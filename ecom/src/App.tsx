import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import Login from './components/Login';
import SignUp from './components/SignUp';
import Shop from './components/Shop';
import Wwe from './components/Wwe';
import Category from './components/Category';
import Traditional from './components/Traditional';
import Ethnic from './components/Ethnic';
import Review from './components/Review';
import PostFetch from './components/PostFetch';
import Checkout from './components/Checkout';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/shop" element={<Shop />} /> 
        <Route path="/category" element={<Category />} /> 
        <Route path="/westernwear" element={<Wwe />} />
        <Route path="/Traditionalwear" element={<Traditional />} />
        <Route path="/Ethnicwear" element={<Ethnic />} />
        <Route path="/review" element={<Review />} /> 
        <Route path="/postfetch" element={<PostFetch />} /> 
        <Route path="/checkout" element={<Checkout/>} /> 
      </Routes>
    </BrowserRouter>
  );
}
