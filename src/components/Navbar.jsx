import React, { use,  } from 'react';
import { IoFastFood } from 'react-icons/io5';
import { HiMenu } from 'react-icons/hi';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
  const { user, logOut}= use(AuthContext);
  const handleLogout = () => {
    
    
    logOut()
    .then(() => {
     toast.success("Log Out successfully!");
   }).catch((error) => {
    console.log(error)
   });
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        <div className="flex items-center gap-4">
         
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
                <NavLink to="/add-recipe" className={({ isActive }) => isActive ? 'text-amber-500' : 'hover:text-amber-400'}>
                  Add Recipe
                </NavLink>
              </li>
              <li>
                <NavLink to="/my-recipes" className={({ isActive }) => isActive ? 'text-amber-500' : 'hover:text-amber-400'}>
                  My Recipes
                </NavLink>
              </li>
              {user && 

                <li>
                  <button onClick={handleLogout} className="bg-red-500 text-white hover:underline">
                    Logout
                  </button>
                </li>
                }
            </ul>
          </div>

         
          <div className="text-xl lg:text-2xl font-bold text-amber-500">
            <h1 className="flex items-center gap-2">
              <IoFastFood />
              Recipe Book
            </h1>
          </div>
        </div>

     
        <div className="hidden lg:flex space-x-6 text-gray-700 font-medium">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-amber-500' : 'hover:text-amber-400'}>
            Home
          </NavLink>
          <NavLink to="/all-recipes" className={({ isActive }) => isActive ? 'text-amber-500' : 'hover:text-amber-400'}>
            All Recipes
          </NavLink>
          <NavLink to="/add-recipe" className={({ isActive }) => isActive ? 'text-amber-500' : 'hover:text-amber-400'}>
            Add Recipe
          </NavLink>
          <NavLink to="/my-recipes" className={({ isActive }) => isActive ? 'text-amber-500' : 'hover:text-amber-400'}>
            My Recipes
          </NavLink>
        </div>

        
        <div className="flex items-center space-x-4">
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
              <Link
                to="/auth/register"
                className="text-sm px-4 py-2 border border-amber-400 text-amber-500 hover:bg-amber-100 rounded"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
