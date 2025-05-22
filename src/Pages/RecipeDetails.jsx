import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { FaHeart } from 'react-icons/fa';

const RecipeDetails = () => {
  const loadedRecipe = useLoaderData();
  const [recipe, setRecipe] = useState(loadedRecipe);
  const [isLiking, setIsLiking] = useState(false);

  const handleLike = () => {
  setIsLiking(true);

  fetch(`https://recipe-book-app-server-eight.vercel.app/recipes/${recipe._id}/like`, {
    method: 'PATCH',
  })
    .then((res) => {
      if (res.ok) {
        setRecipe((prev) => ({ ...prev, likes: prev.likes + 1 }));
      } else {
        console.log('Could not like the recipe');
      }
    })
    .catch((error) => {
      console.log('Error:', error);
    })
    .finally(() => {
      setIsLiking(false);
    });
};

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 space-y-8">

      {/* Image */}
      {recipe.image ? (
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-72 object-cover rounded-lg shadow-md"
        />
      ) : (
        <div className="w-full h-72 bg-gray-200 flex items-center justify-center rounded-lg">
          <span className="text-gray-400">No Image Available</span>
        </div>
      )}

      {/* Title */}
      <h1 className="text-4xl font-extrabold text-amber-600">{recipe.name}</h1>

      {/* Basic Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700 font-medium">
        <p><strong>Cuisine Type:</strong> {recipe.cuisineType || 'Not specified'}</p>
        <p><strong>Preparation Time:</strong> {recipe.preparationTime ? `${recipe.preparationTime} mins` : 'N/A'}</p>
        <p><strong>Categories:</strong> {recipe.categories?.length ? recipe.categories.join(', ') : 'None'}</p>
      </div>

      {/* Ingredients & Instructions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-800">
        <section>
          <h2 className="text-2xl font-semibold mb-3 border-b border-amber-400 pb-1">Ingredients</h2>
          <p className="whitespace-pre-line">{recipe.ingredients}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 border-b border-amber-400 pb-1">Instructions</h2>
          <p className="whitespace-pre-line">{recipe.instructions}</p>
        </section>
      </div>

      {/* Likes Button */}
      <div className="flex items-center space-x-4">
        <button
          onClick={handleLike}
          disabled={isLiking}
          className="flex items-center gap-2 px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition disabled:opacity-50"
          aria-label="Like recipe"
        >
          <FaHeart className="text-lg" />
          Like {recipe.likes || 0}
        </button>
      </div>
    </div>
  );
};

export default RecipeDetails;
