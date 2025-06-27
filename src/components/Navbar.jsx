import React, { useContext } from 'react';
import { IoFastFood } from 'react-icons/io5';
import { HiMenu } from 'react-icons/hi';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { FiMoon, FiSun } from 'react-icons/fi';
import { ThemeContext } from '../Provider/ThemeContext';
import logo from '../assets/logo.png'

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Log Out successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className="bg-amber-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4  flex items-center justify-between">
        {/* Logo and Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Mobile Dropdown */}
          <div className="dropdown lg:hidden">
            <button tabIndex={0} className="btn btn-ghost text-gray-700 font-medium p-0">
              <HiMenu className="h-6 w-6" />
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 space-y-1 text-gray-700"
            >
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? 'text-amber-500' : 'hover:text-amber-400'}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/all-recipes" className={({ isActive }) => isActive ? 'text-amber-500' : 'hover:text-amber-400'}>
                  All Recipes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-amber-500' : 'hover:text-amber-400'}>
                  Dashboard
                </NavLink>
              </li>
               
              <li>
                <NavLink to="/about-us" className={({ isActive }) => isActive ? 'text-amber-500' : 'hover:text-amber-400'}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-amber-500' : 'hover:text-amber-400'}>
                  Contact
                </NavLink>
              </li>
              {user && (
                <li>
                  <button onClick={handleLogout} className="bg-red-500 text-white hover:underline">
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Logo */}
          <div className="text-xl lg:text-2xl font-bold text-amber-500">
            <h1 className="flex items-center ">
              <img src={logo} className='w-16' alt="" />
              Recipe Book
            </h1>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 text-gray-700 font-medium">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-amber-500' : 'hover:text-amber-400'}>
            Home
          </NavLink>
          <NavLink to="/all-recipes" className={({ isActive }) => isActive ? 'text-amber-500' : 'hover:text-amber-400'}>
            All Recipes
          </NavLink>
          {user && (
            <>
              <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-amber-500' : 'hover:text-amber-400'}>
               Dashboard
              </NavLink>
              
            </>
          )}
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-amber-500' : 'hover:text-amber-400'}>
            About Us
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-amber-500' : 'hover:text-amber-400'}>
            Contact
          </NavLink>
        </div>

        {/* Theme + Auth Buttons */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="text-2xl p-2 hover:bg-gray-200 rounded-full transition"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <FiMoon className="text-slate-400" /> : <FiSun className="text-amber-500" />}
          </button>
          {user ? (
            <div className="relative group">
              <img
                src={user.photoURL}
                alt="user"
                className="w-10 h-10 rounded-full border-2 border-amber-500 cursor-pointer"
              />
              <div className="absolute right-0 mt-0 w-44 bg-white rounded shadow-lg p-3 text-sm text-gray-700 hidden group-hover:block z-10">
                <p className="font-semibold mb-2">{user.displayName}</p>
                <button
                  onClick={handleLogout}
                  className="w-full p-2 rounded text-left text-white bg-red-500 hover:underline"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <>
              <Link
                to="/auth/login"
                className="text-sm px-4 py-2 bg-amber-400 hover:bg-amber-500 text-white rounded"
              >
                Login
              </Link>
              
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
