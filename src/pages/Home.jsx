import React, { useEffect, useState } from "react";
import axios from "../utils/axios.jsx";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      const res = await axios.get("/products");
      setProducts(res.data.products);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
    console.log("home page mounted");

    return () => {
      console.log("home page unmounted");
    };
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-start p-6">
      {/* Main Card */}
      <div className="bg-white max-w-6xl w-full rounded-xl shadow-lg p-8">
        {/* App Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Recipe App
        </h1>

        <p className="text-gray-700 mb-8">
          Discover, save, and enjoy your favorite recipes
        </p>

        {/* Info Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              🍳 Easy Cooking
            </h2>
            <p className="text-gray-700">
              Simple recipes designed for everyday cooking.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              ❤️ Save Favorites
            </h2>
            <p className="text-gray-700">
              Keep your favorite dishes in one place.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              🌍 Explore Cuisine
            </h2>
            <p className="text-gray-700">
              Recipes from different cultures and regions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
