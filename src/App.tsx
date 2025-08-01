import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Collections from './pages/Collections';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import ProductViewerDemo from './components/ProductViewerDemo';
import Cart from './pages/Cart';
import { CartProvider } from './components/CartContext';
import Offers from './pages/Offers';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/360-demo" element={<ProductViewerDemo />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/offers" element={<Offers />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;