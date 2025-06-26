import React from "react";

const categories = ["Appetizers", "Main Course", "Desserts", "Drinks"];

const CategorySection = () => {
  return (
    <section className="mt-10 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-amber-500 mb-6">Recipe Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {categories.map((cat) => (
          <div key={cat} className="bg-white shadow rounded p-4 hover:bg-amber-50 transition">
            <h3 className="font-semibold text-gray-700">{cat}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
