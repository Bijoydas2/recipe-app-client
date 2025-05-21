import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Allrecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://recipe-book-app-server-eight.vercel.app/recipes')
      .then(res => res.json())
      .then(data => {
        setRecipes(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch recipes:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading recipes...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">All Recipes</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map(recipe => (
          <div key={recipe._id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <img
              src={recipe.image || 'https://via.placeholder.com/400x250?text=No+Image'}
              alt={recipe.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600 text-sm mb-1"><strong>Cuisine:</strong> {recipe.cuisineType}</p>
              <p className="text-gray-600 text-sm mb-1"><strong>Prep Time:</strong> {recipe.prepTime} mins</p>
             

              <Link
                to={`/recipe-details/${recipe._id}`}
                className="mt-auto inline-block bg-amber-500 hover:bg-amber-600 text-white text-center py-2 rounded-md font-semibold"
              >
                See Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allrecipes;
