import { useState } from 'react';
import Swal from 'sweetalert2';

const AddRecipe = () => {
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    ingredients: '',
    instructions: '',
    cuisine: 'Italian',
    prepTime: '',
    categories: [],
    likes: 0,
  });

  const cuisines = ['Italian', 'Mexican', 'Indian', 'Chinese', 'Others'];
  const categoriesList = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Vegan'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox' && name === 'categories') {
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

    const form = e.target;
    const formDataObj = Object.fromEntries(new FormData(form));
    const categories = new FormData(form).getAll('categories');

    const newRecipe = {
      ...formDataObj,
      categories,
      likes: 0,
    };

    console.log('Submitted Data:', newRecipe);

    fetch('http://localhost:3000/recipes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRecipe),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire('Recipe added successfully.');
        setFormData({
          image: '',
          title: '',
          ingredients: '',
          instructions: '',
          cuisine: 'Italian',
          prepTime: '',
          categories: [],
          likes: 0,
        });
      })
      .catch((error) => {
        Swal.fire('Error', error.message, 'error');
      });
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white shadow-2xl rounded-2xl">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block font-medium text-gray-700">Image URL</label>
          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-blue-500"
            required
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Title</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Ingredients</label>
          <textarea
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            rows={3}
            required
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Instructions</label>
          <textarea
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            rows={4}
            required
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Cuisine Type</label>
          <select
            name="cuisine"
            value={formData.cuisine}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          >
            {cuisines.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium text-gray-700">Preparation Time (minutes)</label>
          <input
            type="number"
            name="prepTime"
            value={formData.prepTime}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-2">Categories</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {categoriesList.map((cat) => (
              <label key={cat} className="flex items-center space-x-2 text-sm text-gray-700">
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

        <div className="text-center pt-4">
          <button
            type="submit"
            className="bg-amber-500 hover:bg-amber-500 text-white font-semibold px-6 py-2 rounded-lg shadow-lg transition"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipe;
