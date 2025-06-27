import React, { useEffect, useState } from "react";
import UpdateModal from "../components/UpdateModal";

import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import RecipesTable from "../components/RecipesTable";

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
        toast.success("Deleted Successfully");
      })
      .catch(() => toast.error("Failed to delete recipe"));
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
        toast.success("Updated Successfully");
        setShowModal(false);
      })
      .catch(() => toast.error("Failed to update recipe"));
  };

  return (
    <div className="p-4">
      <Helmet>
        <title>My Recipes</title>
      </Helmet>

      <RecipesTable
        recipes={recipes}
        onDelete={handleDelete}
        onEdit={(recipe) => {
          setSelectedRecipe(recipe);
          setShowModal(true);
        }}
      />

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
