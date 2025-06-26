import React from "react";

const BlogSection = () => {
  return (
    <section className="mt-10 max-w-7xl mx-auto  px-4">
      <h2 className="text-4xl font-bold text-center text-amber-500 mb-6">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {[1, 2, 3].map((id) => (
          <div key={id} className="bg-white shadow p-4 rounded">
            <h3 className="font-bold mb-2 text-amber-500">5 Tips for Healthy Cooking {id}</h3>
            <p className="text-sm text-gray-700">Discover ways to keep your meals both delicious and nutritious.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
