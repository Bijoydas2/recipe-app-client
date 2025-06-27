import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaUserAlt, FaEnvelope, FaRegIdBadge } from "react-icons/fa";

const Overview = () => {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState({
    totalItems: 0,
    myItems: 0,
    totalLikes: 0,
  });

  useEffect(() => {
    if (user?.email) {
      fetch(`https://recipe-book-app-server-eight.vercel.app/api/stats?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setStats(data))
        .catch((err) => console.error("Failed to fetch stats:", err));
    }
  }, [user]);

  return (
    <div className="px-4 md:px-0">
      <h2 className="text-4xl font-bold text-amber-500 mb-8">Dashboard Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Stats Cards */}
        {[
          { label: "Total Items", value: stats.totalItems },
          { label: "My Items", value: stats.myItems },
          { label: "Total Likes", value: stats.totalLikes },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-lg font-semibold text-amber-500 mb-2">{label}</h3>
            <p className="text-4xl font-extrabold text-gray-900">{value}</p>
          </div>
        ))}
      </div>

      {/* User Profile Section */}
      <section className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-bold text-amber-600 mb-6 border-b border-amber-300 pb-3">
          User Profile
        </h3>

        <div className="flex items-center gap-6 mb-6">
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt={user.displayName || "User Profile"}
              className="w-24 h-24 rounded-full object-cover border-4 border-amber-400"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-amber-200 flex items-center justify-center text-amber-600 font-extrabold text-4xl border-4 border-amber-400">
              {user?.displayName ? user.displayName.charAt(0).toUpperCase() : "U"}
            </div>
          )}

          <div>
            <h4 className="text-xl font-semibold text-gray-900">{user?.displayName || "No Name Provided"}</h4>
            <p className="text-gray-600 mt-1">{user?.email}</p>
          </div>
        </div>

        <ul className="space-y-4 text-gray-800">
          <li className="flex items-center gap-3">
            <FaUserAlt className="text-amber-500 text-xl" />
            <span className="font-medium">Username:</span>
            <span>{user?.displayName || "N/A"}</span>
          </li>
          <li className="flex items-center gap-3">
            <FaEnvelope className="text-amber-500 text-xl" />
            <span className="font-medium">Email:</span>
            <span>{user?.email}</span>
          </li>
          <li className="flex items-center gap-3">
            <FaRegIdBadge className="text-amber-500 text-xl" />
            <span className="font-medium">User ID:</span>
            <span>{user?.uid || "N/A"}</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Overview;
