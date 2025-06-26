import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Typewriter } from 'react-simple-typewriter';

const images = [
  'https://i.ibb.co/kjNyCGf/istockphoto-2190221556-612x612.jpg',
  'https://i.ibb.co/7JPWCGgB/istockphoto-2218059295-612x612.jpg',
  'https://i.ibb.co/3YkPy0fM/istockphoto-2220525163-612x612.jpg',
];

const RecipeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('right');

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideDirection('right');
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-[60vh]">
      {/* Slide container */}
      <div
        key={currentIndex}
        className={`absolute inset-0 transition-transform duration-1000 ease-in-out transform ${
          slideDirection === 'right' ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ backgroundImage: `url(${images[currentIndex]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Overlay */}
        <div className="w-full h-full bg-opacity-40 flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">
            Welcome to Recipe World!
          </h1>
          <p className="text-lg mb-6 drop-shadow-lg">
            Discover recipes for{' '}
            <span className="text-orange-400 font-semibold">
              <Typewriter
                words={['Foodies', 'Home Chefs', 'Everyone!']}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
       <Link to='/recipes'>  <button className="px-6 py-2 font-semibold text-white bg-amber-500 rounded-md transition-all duration-300 ease-in-out hover:bg-amber-600 hover:shadow-md hover:scale-105">
      See All Recipes
    </button></Link>


        </div>
      </div>
    </div>
  );
};

export default RecipeSlider;
