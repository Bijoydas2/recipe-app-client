import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://recipe-book-app-server-eight.vercel.app/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div>
      <h2 className="text-4xl font-bold text-amber-500 mb-6">All Recipes</h2>
      <div className="overflow-x-auto">
        <table className="table w-full bg-white shadow-md rounded-lg">
          <thead className="bg-base-200 text-base-content">
            <tr>
              <th className="py-3 px-4 text-left">Image</th> 
              <th className="py-3 px-4 text-left">Title</th>
              <th className="py-3 px-4 text-left">Likes</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((item) => (
              <tr key={item._id} className="hover:bg-base-100">
                <td className="py-3 px-4">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gray-200 flex items-center justify-center text-gray-400 text-sm rounded">
                      N/A
                    </div>
                  )}
                </td>
                <td className="py-3 px-4">{item.title}</td>
                <td className="py-3 px-4">{item.likes}</td>
                <td className="py-3 px-4">
                  <Link to={`/recipes/${item._id}`}>
                    <button className="btn btn-sm btn-outline text-amber-500 border-amber-500 hover:bg-amber-500 hover:text-white">
                      View
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
            {recipes.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-5 text-gray-500">
                  No recipes found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllRecipes;
