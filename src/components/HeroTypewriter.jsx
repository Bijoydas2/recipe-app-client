// src/components/HeroTypewriter.jsx
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const HeroTypewriter = () => {
  return (
    <section className="bg-gray-100 py-12 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Recipe World!</h1>
      <p className="text-lg text-gray-600">
        Discover recipes for{" "}
        <span className="text-orange-500 font-semibold">
          <Typewriter
            words={["Foodies", "Home Chefs", "Everyone!"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </p>
    </section>
  );
};

export default HeroTypewriter;
