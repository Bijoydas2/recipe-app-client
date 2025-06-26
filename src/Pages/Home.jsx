// src/pages/Home.jsx
import React from "react";
import RecipeSlider from "../components/RecipeSlider";
import TopRecipes from "../components/TopRecipes";
import RecipeViewSection from "../components/RecipeViewSection";
import { Helmet } from "react-helmet-async";
import CategorySection from "../components/CategorySection";
import BlogSection from "../components/BlogSection";

import Testimonials from "../components/Testimonial";
import FeaturedChefs from "../components/FeaturedChefs";


const Home = () => {
  
  return (
    <div>
       <Helmet>
        <title>Top Recipe </title>
       
      </Helmet>
        <RecipeSlider />
        <TopRecipes />
       
        <CategorySection />
        <BlogSection />
        <Testimonials/>
         <FeaturedChefs/>
         <RecipeViewSection />
      
      
       

      
    </div>
  );
};

export default Home;
