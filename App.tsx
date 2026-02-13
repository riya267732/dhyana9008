
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Account from './pages/Account';
import { CartItem, Product } from './types';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product, size: string) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === product.id && i.selectedSize === size);
      if (existing) {
        return prev.map(i => i.id === product.id && i.selectedSize === size ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...product, selectedSize: size, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string, size: string) => {
    setCartItems(prev => prev.filter(i => !(i.id === id && i.selectedSize === size)));
  };

  const updateQuantity = (id: string, size: string, delta: number) => {
    setCartItems(prev => prev.map(i => {
      if (i.id === id && i.selectedSize === size) {
        const newQty = Math.max(1, i.quantity + delta);
        return { ...i, quantity: newQty };
      }
      return i;
    }));
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar cartCount={totalItems} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail onAddToCart={addToCart} />} />
            <Route path="/cart" element={<Cart items={cartItems} onRemove={removeFromCart} onUpdateQty={updateQuantity} />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </HashRouter>
  );
};

export default App;
