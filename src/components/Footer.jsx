import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-10 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Logo + Name */}
        <div>
          <h2 className="text-2xl font-bold text-amber-500 mb-2">Recipe Book</h2>
          <p className="text-sm text-gray-400">Your everyday cooking companion. Cook with joy!</p>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold text-amber-500 mb-2">Contact Us</h3>
          <p>Email: support@recipebook.com</p>
          <p>Phone: +880 1234-567890</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-amber-500 mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-5 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-amber-500 transition duration-200" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-amber-500 transition duration-200" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-amber-500 transition duration-200" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        {new Date().getFullYear()} Recipe Book. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
