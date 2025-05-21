import React from 'react';
import { FaSadTear, FaUtensils } from 'react-icons/fa';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center text-center p-6">
      <div className="text-red-500 text-6xl font-bold mb-2">Error 404</div>
      <FaSadTear className="text-yellow-700 text-6xl mb-4 animate-pulse" />
      <h1 className="text-4xl font-extrabold text-yellow-800 mb-3">
        Page Not Found
      </h1>
      <p className="text-lg text-yellow-700 mb-6">
        Looks like the recipe you're looking for has gone stale 🍞
      </p>
      <Link
        to="/"
        className="inline-flex items-center bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded-xl transition"
      >
        <FaUtensils className="mr-2" />
        Back to Home Menu
      </Link>
      <img
        src="https://cdn-icons-png.flaticon.com/512/135/135620.png"
        alt="Spilled food"
        className="w-24 h-24 mt-8 opacity-70"
      />
    </div>
    );
};

export default Error;