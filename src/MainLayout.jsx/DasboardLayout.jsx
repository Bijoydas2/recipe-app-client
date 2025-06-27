import React from "react";
import { Outlet, NavLink, Link } from "react-router";
import { FaHome, FaTachometerAlt, FaBookOpen, FaPlusCircle, FaUserAlt } from "react-icons/fa";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open min-h-screen bg-gray-50">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      
      {/* Main content area */}
      <div className="drawer-content flex flex-col">
        {/* Navbar / Header */}
        <header className="w-full bg-white shadow-sm sticky top-0 z-20 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-amber-600 flex items-center gap-2">
            <FaTachometerAlt /> Dashboard
          </h1>

          {/* Home Button */}
          <Link
            to="/"
            className="flex items-center gap-1 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded font-semibold transition"
            title="Go to Home"
          >
            <FaHome /> Home
          </Link>
        </header>

        {/* Outlet for child routes */}
        <main className="flex-1 overflow-auto p-6 max-w-7xl mx-auto w-full">
          <Outlet />
        </main>
      </div>

      {/* Sidebar */}
      <div className="drawer-side bg-white shadow-lg border-r border-gray-200">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <nav className="h-full w-64 px-6 py-8 flex flex-col justify-start space-y-4">
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition ${
                isActive
                  ? "bg-amber-100 text-amber-700 shadow"
                  : "text-gray-600 hover:bg-gray-100 hover:text-amber-600"
              }`
            }
          >
            <FaTachometerAlt className="text-lg" />
            Overview
          </NavLink>

          <NavLink
            to="/dashboard/all-recipe"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition ${
                isActive
                  ? "bg-amber-100 text-amber-700 shadow"
                  : "text-gray-600 hover:bg-gray-100 hover:text-amber-600"
              }`
            }
          >
            <FaBookOpen className="text-lg" />
            All Recipes
          </NavLink>

          <NavLink
            to="/dashboard/add-recipe"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition ${
                isActive
                  ? "bg-amber-100 text-amber-700 shadow"
                  : "text-gray-600 hover:bg-gray-100 hover:text-amber-600"
              }`
            }
          >
            <FaPlusCircle className="text-lg" />
            Add Recipe
          </NavLink>

          <NavLink
            to="/dashboard/my-recipes"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition ${
                isActive
                  ? "bg-amber-100 text-amber-700 shadow"
                  : "text-gray-600 hover:bg-gray-100 hover:text-amber-600"
              }`
            }
          >
            <FaUserAlt className="text-lg" />
            My Recipes
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default DashboardLayout;
