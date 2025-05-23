import React from 'react';
import { Outlet } from 'react-router-dom';

import { ScrollToTop } from '@/shared/components/ScrollToTop';
import { Footer } from './Footer/Footer';
import { Navbar } from './Navbar/Navbar';
import { Cart } from './cart/ui/Cart';

export const Layout = () => {
  return (
    <div className="layout">
      <ScrollToTop />
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
      <Cart />
    </div>
  );
}; 