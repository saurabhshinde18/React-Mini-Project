import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-start p-6">
      {/* Card */}
      <div className="bg-white max-w-4xl w-full rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About Us
        </h1>

        <p className="text-gray-700 mb-6">
          Recipe App is a simple platform designed to help users discover,
          organize, and enjoy delicious recipes with ease.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Our Mission
          </h2>
          <p className="text-gray-700">
            Our mission is to make cooking enjoyable and accessible for everyone
            by providing easy-to-follow recipes and a clean user experience.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            What We Offer
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Easy and beginner-friendly recipes</li>
            <li>Save and manage favourite dishes</li>
            <li>Clean and simple user interface</li>
            <li>Explore different cuisines</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Why Choose Us
          </h2>
          <p className="text-gray-700">
            Whether you are a beginner or an experienced cook, Recipe App helps
            you find inspiration and cook with confidence.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
