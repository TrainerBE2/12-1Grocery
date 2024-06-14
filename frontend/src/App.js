import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./Component/Navbar";
import HeroSection from "./Component/HeroSection";
import Login from "./Component/Login";
import Register from "./Component/Register";
import ForgotPassword from "./Component/ForgotPasword";
import Product, { products } from './Component/Product';
import CategorySection from './Component/CategorySection';

const ProductList = () => {
  return (
    <div className="product-section">
      <h2 className="product-title">Produk Baru</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/category" element={<CategorySection />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
