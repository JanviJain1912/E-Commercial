import React from "react";
import './App.scss';
import Header from './components/Header.js';
import HomeBanner from "./components/HomeBanner";
import Login from "./components/Login";
import Banner from "./components/Banner";
import { NavBar } from "./components/navbar"
import { Products } from "./pages/products"
import { Product } from "./pages/product"
import { Cart } from "./pages/cart"
import { NotFound } from "./pages/not-found"

import { useCart } from './context/cart'

import { BrowserRouter as Router, Routes, Route, useNavigate, createSearchParams } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();
  const {cartItemCount} = useCart()
  const onSearch = (searchQuery) => {
    navigate(`/?${createSearchParams({ q: searchQuery })}`)
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<div><Header /><HomeBanner /></div>} />
        <Route path="/login" element={<div><Header /><Login /></div>} />
        <Route path="/register" element={<div><Header /><Login /></div>} />
      </Routes>

      <NavBar onSearch={onSearch} cartItemCount={cartItemCount()} />
      {/* <Banner /> */}
      <Routes>
        <Route path="/dashboard" element={<Products />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App
