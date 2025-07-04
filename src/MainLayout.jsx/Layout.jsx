import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router'; 
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div className="bg-base-200 flex flex-col min-h-screen">
     
      <Navbar />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
