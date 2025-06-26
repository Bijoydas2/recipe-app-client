import { FaUtensils } from "react-icons/fa";

const FeaturedChefs = () => {
  const chefs = [
    { name: "Chef Nadiya", specialty: "Bangladeshi Cuisine" },
    { name: "Chef Rahim", specialty: "Continental Dishes" },
    { name: "Chef Jenny", specialty: "Vegan & Desserts" },
  ];

  return (
    <section className="mt-10 px-4  ">
      <h2 className="text-4xl font-bold text-center text-amber-500 mb-10">Meet Our Top Chefs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-2xl">
              <FaUtensils />
            </div>
            <h3 className="text-lg font-semibold text-amber-500 mb-1">{chef.name}</h3>
            <p className="text-sm text-gray-600">{chef.specialty}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedChefs;
