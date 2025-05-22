import React, { useEffect, useState } from "react";
import UpdateModal from "../components/UpdateModal";
import RecipeCard from "../components/RecipeCard";
import { toast } from "react-toastify";

const MyRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const userEmail = localStorage.getItem("userEmail");

  useEffect(() => {
    if (!userEmail) return;

    fetch(`https://recipe-book-app-server-eight.vercel.app/api/my-recipes?email=${userEmail}`)
      .then((res) => res.json())
      .then((data) => setRecipes(Array.isArray(data) ? data : []))
      .catch(() => setRecipes([]));
  }, [userEmail]);

  const handleDelete = (id) => {
    fetch(`https://recipe-book-app-server-eight.vercel.app/api/recipes/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Delete failed");
        setRecipes((prev) => prev.filter((recipe) => recipe._id !== id));
        toast.success("Delete Succesfully")
      })
      .catch((err) => {
        console.error("Failed to delete:", err);
        alert("Failed to delete recipe");
      });
  };

  const handleUpdate = (updatedRecipe) => {
      const { _id, ...updateData } = updatedRecipe;

    fetch(`https://recipe-book-app-server-eight.vercel.app/api/recipes/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Update failed");
        return res.json();
      })
      .then(() => {
        setRecipes((prev) =>
          prev.map((recipe) =>
            recipe._id === updatedRecipe._id ? updatedRecipe : recipe
          )
        );
        toast.success('Updated Succesful')
        setShowModal(false);
      })
      .catch((err) => {
        console.error("Failed to update:", err);
        alert("Failed to update recipe");
      });
  };

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {Array.isArray(recipes) &&
        recipes.map((recipe) => (
          <RecipeCard
            key={recipe._id}
            recipe={recipe}
            onDelete={handleDelete}
            onEdit={() => {
              setSelectedRecipe(recipe);
              setShowModal(true);
            }}
          />
        ))}
      {showModal && selectedRecipe && (
        <UpdateModal
          recipe={selectedRecipe}
          onClose={() => setShowModal(false)}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

export default MyRecipes;
