import React from "react";

const About = () => {
  return (
    <section className=" py-10  px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
            alt="Cooking Ingredients"
            className="rounded-lg shadow-lg object-cover w-full max-w-md"
          />
        </div>

        {/* Right Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-extrabold text-amber-600 mb-6">
            About Recipe Book
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-lg">
            Welcome to <span className="font-semibold">Recipe Book</span>, your
            ultimate culinary companion! We curate a diverse collection of recipes
            from around the globe, crafted to inspire cooks of all skill levels.
            Whether you're experimenting with new flavors or perfecting classic
            dishes, our platform offers detailed recipes, expert tips, and a
            vibrant community to share your passion.
          </p>
          <blockquote className="border-l-4 border-amber-400 pl-6 italic text-gray-600 text-lg">
            “Cooking is an art, and every meal is a masterpiece waiting to happen.”
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;
