import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

const RecipeViewSection = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("https://assets7.lottiefiles.com/packages/lf20_1pxqjqps.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation", err));
  }, []);

  return (
    <section className="flex flex-col items-center justify-center bg-white py-14 px-6 text-center shadow-lg rounded-xl w-[95%] mx-auto my-12">
      {animationData ? (
        <Lottie
          animationData={animationData}
          loop
          className="w-48 h-40 sm:w-64 sm:h-52"
        />
      ) : (
        <p>Loading animation...</p>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold mt-8 mb-4 text-amber-500 drop-shadow-sm">
        Discover & Share Delicious Recipes!
      </h2>
      <p className="max-w-xl mx-auto text-lg text-amber-900 font-semibold tracking-wide leading-relaxed">
        Join our vibrant community of passionate cooks. Find inspiration, share your culinary creations, and enjoy tasty meals with food lovers worldwide.
      </p>
      
    </section>
  );
};

export default RecipeViewSection;
