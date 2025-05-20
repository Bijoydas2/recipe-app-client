import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <div className='bg-base-200'>
          <header className='bg-gray-300'>
             <Navbar></Navbar>
          </header>
          <main className='min-h-[calc(100vh-369px)]'>
            <Outlet></Outlet>
          </main>
        
        <Footer></Footer>
        </div>
    );
};

export default Layout;