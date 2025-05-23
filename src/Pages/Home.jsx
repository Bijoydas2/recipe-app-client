// src/pages/Home.jsx
import React from "react";
import RecipeSlider from "../components/RecipeSlider";
import TopRecipes from "../components/TopRecipes";
import HeroTypewriter from "../components/HeroTypewriter";

import RecipeViewSection from "../components/RecipeViewSection";
import { Helmet } from "react-helmet-async";


const Home = () => {
  
  return (
    <div>
       <Helmet>
        <title>Top Recipe </title>
       
      </Helmet>
      <HeroTypewriter/>
 

      <RecipeSlider />
      
      <TopRecipes/>
      <RecipeViewSection/>
      
      
       

      
    </div>
  );
};

export default Home;
