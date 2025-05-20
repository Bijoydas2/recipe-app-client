import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const AuthLayouts = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header >
                <Navbar/>

            </header>
            <main className='w-11/12 mx-auto py-5 min-h-[calc(100vh-369px)]'>
           <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default AuthLayouts;