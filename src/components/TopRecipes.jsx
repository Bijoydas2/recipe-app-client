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
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 flex items-center justify-center gap-3">
     Top Recipes <FaHotjar className="text-amber-500" />
   </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                to={`/recipe/${recipe._id}`}
                className="mt-auto flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg font-semibold transition-colors duration-200"
              >
                View Details <FiArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/all-recipes"
          className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white py-3 px-8 rounded-xl font-semibold text-lg transition-colors duration-300"
        >
          See All Recipes <FiArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default TopRecipes;
