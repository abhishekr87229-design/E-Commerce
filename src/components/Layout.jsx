import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: 'calc(100vh - 60px)', paddingTop: '60px', paddingBottom: '40px' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
