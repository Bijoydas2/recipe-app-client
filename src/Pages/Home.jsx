// src/pages/Home.jsx
import React from "react";
import RecipeSlider from "../components/RecipeSlider";
import TopRecipes from "../components/TopRecipes";
import HeroTypewriter from "../components/HeroTypewriter";

import RecipeViewSection from "../components/RecipeViewSection";


const Home = () => {
  return (
    <div>
      <HeroTypewriter/>
 

      <RecipeSlider />
      
      <TopRecipes/>
      <RecipeViewSection/>
      
      
       

      
    </div>
  );
};

export default Home;
