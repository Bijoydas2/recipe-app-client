import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const RecipesTable = ({ recipes, onDelete, onEdit }) => {
  return (
    <div className="overflow-x-auto">
      <h2 className="text-4xl text-amber-500 font-bold mb-6">My Recipes</h2>
      <table className="table w-full bg-white shadow rounded-lg">
        <thead className="bg-base-200">
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Cuisine</th>
            <th>Prep Time</th>
            <th>Category</th>
            <th>Likes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <tr key={recipe._id} className="hover:bg-base-100">
                <td>
                  {recipe.image ? (
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gray-200 flex items-center justify-center text-gray-400 text-sm rounded">
                      N/A
                    </div>
                  )}
                </td>
                <td>{recipe.title}</td>
                <td>{recipe.cuisine || "N/A"}</td>
                <td>{recipe.prepTime || "N/A"}</td>
                <td>{recipe.categories?.join(", ") || "None"}</td>
                <td>{recipe.likes || 0}</td>
                <td className="flex gap-2">
                  <button
                    onClick={() => onEdit(recipe)}
                    className="btn btn-xs bg-yellow-500 hover:bg-yellow-600 text-white flex items-center gap-1"
                  >
                    <FaEdit /> Update
                  </button>
                  <button
                    onClick={() => onDelete(recipe._id)}
                    className="btn btn-xs bg-red-500 hover:bg-red-600 text-white flex items-center gap-1"
                  >
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center py-6 text-gray-500">
                No recipes found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RecipesTable;
