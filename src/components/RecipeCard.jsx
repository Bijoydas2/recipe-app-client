import React from "react";
import { FaClock, FaHeart, FaListUl, FaBookOpen, FaUtensils, FaFolderOpen, FaEdit, FaTrash } from "react-icons/fa";

const RecipeCard = ({ recipe, onDelete, onEdit }) => {
  return (
    <div className="rounded-xl shadow-lg p-4 bg-white hover:shadow-xl transition duration-300">
      {recipe.image ? (
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-40 object-cover mb-4 rounded-lg"
        />
      ) : (
        <div className="w-full h-40 bg-gray-100 flex items-center justify-center rounded-lg mb-4">
          <span className="text-gray-400 text-sm">No Image Available</span>
        </div>
      )}

      <h2 className="text-xl font-bold text-gray-800 mb-3">{recipe.title}</h2>

      <div className="text-sm text-gray-700 space-y-1">
        <p><FaListUl className="inline mr-1 text-amber-600" /><strong>Ingredients:</strong> {recipe.ingredients.slice(0, 40)}{recipe.ingredients.length > 40 && '...'}</p>
        <p><FaBookOpen className="inline mr-1 text-blue-600" /><strong>Instructions:</strong> {recipe.instructions.slice(0, 40)}{recipe.instructions.length > 40 && '...'}</p>
        <p><FaUtensils className="inline mr-1 text-green-600" /><strong>Cuisine:</strong> {recipe.cuisine || 'N/A'}</p>
        <p><FaClock className="inline mr-1 text-purple-600" /><strong>Prep Time:</strong> {recipe.prepTime || 'N/A'}</p>
        <p><FaFolderOpen className="inline mr-1 text-pink-600" /><strong>Category:</strong> {recipe.categories?.length ? recipe.categories.join(', ') : 'None'}</p>
        <p><FaHeart className="inline mr-1 text-red-500" /><strong>Likes:</strong> {recipe.likes || 0}</p>
      </div>

      <div className="flex gap-3 mt-4 justify-end">
        <button
          onClick={onEdit}
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded"
        >
          <FaEdit/> Update
        </button>
        <button
          onClick={() => onDelete(recipe._id)}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
        >
          <FaTrash /> Delete
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
