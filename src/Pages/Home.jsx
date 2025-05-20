// src/pages/Home.jsx
import React from "react";
import RecipeSlider from "../components/RecipeSlider";

const Home = () => {
  return (
    <div>
      <section className="bg-gray-100 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Recipe World!</h1>
        <p className="text-lg text-gray-600">Discover delicious recipes below</p>
      </section>

      <RecipeSlider />

      {/* You can add more sections below */}
    </div>
  );
};

export default Home;
