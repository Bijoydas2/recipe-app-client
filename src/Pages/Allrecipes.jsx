import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiArrowRight, FiBookOpen, FiHeart } from 'react-icons/fi';
import { Link } from 'react-router';

const Allrecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedCuisine, setSelectedCuisine] = useState('all');

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

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleFilterChange = (e) => {
    setSelectedCuisine(e.target.value);
  };

  const filteredRecipes = selectedCuisine === 'all'
    ? recipes
    : recipes.filter(r => r.cuisine.toLowerCase() === selectedCuisine.toLowerCase());

  const sortedRecipes = [...filteredRecipes].sort((a, b) => {
    return sortOrder === 'asc'
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title);
  });

  if (loading) {
    return <div className="text-center mt-10">Loading recipes...</div>;
  }

  // dynamically extract all unique cuisines
  const cuisineOptions = ['all', ...new Set(recipes.map(r => r.cuisine))];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Helmet>
        <title>All Recipe Book</title>
      </Helmet>

      <h1 className="text-4xl font-bold text-amber-500 mb-8 text-center">All Recipes</h1>

      {/* Sort & Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
        <div>
          <label className="mr-2 font-medium">Sort by Title:</label>
          <select value={sortOrder} onChange={handleSortChange} className="border rounded px-3 py-1">
            <option value="asc">A → Z</option>
            <option value="desc">Z → A</option>
          </select>
        </div>

        <div>
          <label className="mr-2 font-medium">Filter by Cuisine:</label>
          <select value={selectedCuisine} onChange={handleFilterChange} className="border rounded px-3 py-1">
            {cuisineOptions.map((cuisine, index) => (
              <option key={index} value={cuisine}>{cuisine}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Recipes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedRecipes.map(recipe => (
          <div key={recipe._id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <img
              src={recipe.image || 'https://via.placeholder.com/400x250?text=No+Image'}
              alt={recipe.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-xl text-amber-500 font-semibold mb-2">{recipe.title}</h2>
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
                className="mt-auto flex items-center justify-center gap-2 px-4 py-1 font-semibold text-white bg-amber-500 rounded-md transition hover:bg-amber-600 hover:shadow-md hover:scale-105"
              >
                View <FiArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allrecipes;
