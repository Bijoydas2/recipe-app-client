// src/components/RecipeSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const recipes = [
  {
    name: "Strawberry Kulfi",
    image: "https://i.ibb.co/Pb60vhG/istockphoto-1321010390-1024x1024.jpg",
  },
  {
    name: "Paneer Tikka",
    image: "https://i.ibb.co/BKrq3mwM/istockphoto-1474136049-1024x1024.jpg",
  },
  {
    name: "Masala Dosa",
    image: "https://i.ibb.co/6Jwt35NZ/istockphoto-2188502321-1024x1024.jpg",
  },
  {
    name: "Gulab Jamun",
    image: "https://i.ibb.co/DHhcy7pZ/umair-ali-asad-2o-J4e-GRPqr-E-unsplash.jpg",
  },
];

const RecipeSlider = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
     
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {recipes.map((recipe, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{recipe.name}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecipeSlider;
