import React from 'react';
import { Link } from 'react-router';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '../assets/logo.png'
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-10 pb-6 ">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">

        {/* Logo + Name */}
           <div className="text-xl lg:text-2xl font-bold text-amber-500">
            <h1 className="flex items-center ">
              <img src={logo} className='w-16' alt="" />
              Recipe Book
            </h1>
          <p className="text-sm text-gray-400 max-w-xs">
            Your everyday cooking companion. Cook with joy!
          </p>
          </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-amber-500 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-amber-500 transition duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-amber-500 transition duration-200">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-amber-500 transition duration-200">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/recipes" className="hover:text-amber-500 transition duration-200">
                Recipes
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold text-amber-500 mb-4">Contact Us</h3>
          <p>Email: support@recipebook.com</p>
          <p>Phone: +880 1234-567890</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-amber-500 mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-5 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="hover:text-amber-500 transition duration-200" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn className="hover:text-amber-500 transition duration-200" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="hover:text-amber-500 transition duration-200" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="hover:text-amber-500 transition duration-200" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Recipe Book. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
