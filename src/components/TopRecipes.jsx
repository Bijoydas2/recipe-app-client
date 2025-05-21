import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const TopRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/top-recipes')
      .then(res => res.json())
      .then(data => setRecipes(data))
      .catch(err => console.error('Error loading top recipes:', err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Top Recipes</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map(recipe => (
          <div key={recipe._id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
            <img
              src={recipe.image || 'https://via.placeholder.com/400x250?text=No+Image'}
              alt={recipe.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
              <p className="text-gray-600 text-sm"><strong>Cuisine:</strong> {recipe.cuisine}</p>
              <p className="text-gray-600 text-sm mb-4"><strong>Likes:</strong> {recipe.likes}</p>

              <Link
                to={`/recipe/${recipe._id}`}
                className="mt-auto inline-block bg-amber-500 hover:bg-amber-600 text-white text-center py-2 rounded-md font-semibold"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          to="/all-recipes"
          className="inline-block bg-gray-700 hover:bg-gray-800 text-white py-2 px-6 rounded-lg font-semibold"
        >
          See All Recipes
        </Link>
      </div>
    </div>
  );
};

export default TopRecipes;
