import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { FiHeart, FiBookOpen, FiArrowRight } from 'react-icons/fi';
import { FaHotjar } from 'react-icons/fa';

const TopRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('https://recipe-book-app-server-eight.vercel.app/top-recipes')
      .then(res => res.json())
      .then(data => setRecipes(data))
      .catch(err => console.error('Error loading top recipes:', err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 mt-10">
      <h2 className="text-4xl text-amber-500  font-bold text-center   flex items-center justify-center gap-3">
     Top Recipes <FaHotjar className="text-amber-500" />
   </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {recipes.map(recipe => (
          <div
            key={recipe._id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            <img
              src={recipe.image || 'https://via.placeholder.com/400x250?text=No+Image'}
              alt={recipe.title}
              className="h-56 w-full object-cover"
            />
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{recipe.title}</h3>

              <p className="flex items-center text-gray-600 text-sm mb-2">
                <FiBookOpen className="mr-2 text-amber-500" />
                <strong className="mr-1">Cuisine Type:</strong> {recipe.cuisine}
              </p>

              <p className="flex items-center text-gray-600 text-sm mb-4">
                <FiHeart className="mr-2 text-red-500" />
                <strong className="mr-1">Likes:</strong> {recipe.likes}
              </p>

              <Link
                to={`/recipes/${recipe._id}`}
                className="mt-auto flex items-center justify-center gap-2px-6 py-2 font-semibold text-white bg-amber-500 rounded-md transition-all duration-300 ease-in-out hover:bg-amber-600 hover:shadow-md hover:scale-105"
              >
                View  <FiArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/all-recipes"
          className="inline-flex items-center gap-2 px-6 py-2 font-semibold text-white bg-amber-500 rounded-md transition-all duration-300 ease-in-out hover:bg-amber-600 hover:shadow-md hover:scale-105"
        >
          See All Recipes <FiArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default TopRecipes;
