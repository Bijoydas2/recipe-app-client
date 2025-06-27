import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { FaHeart } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const RecipeDetails = () => {
  const loadedRecipe = useLoaderData();
  const [recipe, setRecipe] = useState(loadedRecipe);
  const [isLiking, setIsLiking] = useState(false);
  const [isOwner, setIsOwner] = useState(false);

  const userEmail = localStorage.getItem('userEmail');

  useEffect(() => {
    setIsOwner(userEmail === recipe.userEmail);
  }, [userEmail, recipe.userEmail]);

  const handleLike = () => {
    if (isOwner) {
      alert("You can't like your own recipe!");
      return;
    }

    setIsLiking(true);

    fetch(`https://recipe-book-app-server-eight.vercel.app/recipes/${recipe._id}/like`, {
      method: 'PATCH',
    })
      .then((res) => {
        if (res.ok) {
          setRecipe((prev) => ({ ...prev, likes: (prev.likes || 0) + 1 }));
        } else {
          console.error('Failed to like recipe');
        }
      })
      .catch((error) => {
        console.error('Error liking recipe:', error);
      })
      .finally(() => {
        setIsLiking(false);
      });
  };

  return (
    <div className="max-w-5xl mx-auto my-16 px-6 py-10 bg-white rounded-2xl shadow-lg border border-gray-200">
      <Helmet>
        <title>  Recipe Details</title>
      </Helmet>

      {/* Likes Info */}
      <p className="text-sm text-gray-500 italic mb-6 text-center">
        {recipe.likes || 0} {recipe.likes === 1 ? "person is" : "people are"} interested in this recipe
      </p>

      {/* Image */}
      {recipe.image ? (
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-96 object-cover rounded-xl shadow-md mb-10"
        />
      ) : (
        <div className="w-full h-96 bg-gray-100 flex items-center justify-center rounded-xl mb-10 text-gray-400 text-lg font-light">
          No Image Available
        </div>
      )}

      {/* Title */}
      <h1 className="text-5xl font-extrabold text-amber-600 mb-8 text-center tracking-wide">
        {recipe.name}
      </h1>

      {/* Badges */}
      {recipe.categories?.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {recipe.categories.map((cat, index) => (
            <span
              key={index}
              className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              #{cat}
            </span>
          ))}
        </div>
      )}

      {/* Metadata */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14 text-gray-700 font-semibold">
        <div className="bg-amber-50 p-6 rounded-lg shadow-inner border border-amber-200">
          <h3 className="text-amber-700 mb-2">Cuisine Type</h3>
          <p>{recipe.cuisine || "Not specified"}</p>
        </div>
        <div className="bg-amber-50 p-6 rounded-lg shadow-inner border border-amber-200">
          <h3 className="text-amber-700 mb-2">Preparation Time</h3>
          <p>{recipe.prepTime || "N/A"}</p>
        </div>
        <div className="bg-amber-50 p-6 rounded-lg shadow-inner border border-amber-200">
          <h3 className="text-amber-700 mb-2">Difficulty</h3>
          <p>{recipe.difficulty || "Medium"}</p>
        </div>
      </div>

      {/* Ingredients & Instructions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 text-gray-800 mb-14">
        <section>
          <h2 className="text-2xl font-semibold text-amber-600 mb-3">Ingredients</h2>
          <p className="whitespace-pre-line">{recipe.ingredients}</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-amber-600 mb-3">Instructions</h2>
          <p className="whitespace-pre-line">{recipe.instructions}</p>
        </section>
      </div>

      {/* Nutrition */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-12">
        <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
          <h4 className="text-amber-600 font-bold">Calories</h4>
          <p>320 kcal</p>
        </div>
        <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
          <h4 className="text-amber-600 font-bold">Protein</h4>
          <p>18 g</p>
        </div>
        <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
          <h4 className="text-amber-600 font-bold">Carbs</h4>
          <p>42 g</p>
        </div>
        <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
          <h4 className="text-amber-600 font-bold">Fat</h4>
          <p>12 g</p>
        </div>
      </div>

   
      {/* Like Button */}
      <div className="flex justify-center mb-10">
        <button
          onClick={handleLike}
          disabled={isLiking || isOwner}
          className={`flex items-center gap-3 px-10 py-3 rounded-lg text-lg font-semibold transition
            ${isOwner ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-pink-500 hover:bg-pink-600 text-white'}
            ${isLiking ? 'opacity-50 cursor-wait' : ''}
          `}
          title={isOwner ? "You can't like your own recipe" : "Like this recipe"}
        >
          <FaHeart className="text-xl" />
          Like {recipe.likes || 0}
        </button>
      </div>

      {/* Social Share Buttons */}
<div className="flex justify-center gap-4 mb-10">
  <a
    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-sm bg-blue-600 text-white hover:bg-blue-700"
  >
    Share on Facebook
  </a>

  <a
    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(recipe.name)}`}
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-sm bg-sky-500 text-white hover:bg-sky-600"
  >
    Share on Twitter
  </a>
 </div>
      {/* Back Link */}
      <div className="text-center">
        <a href="/" className="text-amber-600 font-medium hover:underline">← Back to Home</a>
      </div>
    </div>
  );
};

export default RecipeDetails;
