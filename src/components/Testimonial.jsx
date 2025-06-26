const Testimonials = () => {
  const reviews = [
    { name: "Amena", review: "Amazing recipes! Very easy to follow." },
    { name: "Shuvo", review: "I tried the biryani recipe—turned out perfect!" },
    { name: "Fatema", review: "Great blog posts and healthy food tips." },
  ];

  return (
    <section className="mt-10 px-4 ">
      <h2 className="text-4xl font-bold text-center text-amber-500 mb-6">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {reviews.map((r, i) => (
          <div key={i} className="bg-white p-4 rounded shadow">
            <p className="italic text-gray-700">"{r.review}"</p>
            <p className="mt-2 text-right font-semibold text-amber-600">– {r.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
