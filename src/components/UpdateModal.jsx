import React, { useState, useEffect } from "react";

const UpdateModal = ({ recipe, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    ingredients: "",
    instructions: "",
    cuisine: "Italian",
    prepTime: "",
    categories: [],
  });

  const cuisines = ['Italian', 'Mexican', 'Indian', 'Chinese', 'Others'];
  const categoriesList = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Vegan'];


  useEffect(() => {
    if (recipe) {
      setFormData({
        image: recipe.image || "",
        title: recipe.title || "",
        ingredients: recipe.ingredients || "",
        instructions: recipe.instructions || "",
        cuisine: recipe.cuisine || "Italian",
        prepTime: recipe.prepTime || "",
        categories: recipe.categories || [],
      });
    }
  }, [recipe]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "categories") {
      setFormData((prev) => ({
        ...prev,
        categories: checked
          ? [...prev.categories, value]
          : prev.categories.filter((cat) => cat !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const updatedRecipe = {
      ...recipe,
      ...formData,
    };

    onUpdate(updatedRecipe);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg w-full max-w-lg shadow-lg overflow-auto max-h-[90vh]"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Update Recipe</h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Image URL</label>
          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Title</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Ingredients</label>
          <textarea
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            rows={3}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Instructions</label>
          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            rows={4}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Cuisine Type</label>
          <select
            name="cuisine"
            value={formData.cuisine}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            {cuisines.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Preparation Time (minutes)</label>
          <input
            type="number"
            name="prepTime"
            value={formData.prepTime}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Categories</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {categoriesList.map((cat) => (
              <label key={cat} className="flex items-center space-x-2 text-sm">
                <input
                  type="checkbox"
                  name="categories"
                  value={cat}
                  checked={formData.categories.includes(cat)}
                  onChange={handleChange}
                />
                <span>{cat}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateModal;
