import React from "react";
import FeaturedCard from "./FeaturedCard";

export default function Features() {
  return (
    <>
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-amber-400">
            Why RecipeRiser?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeaturedCard
              title="Discover Recipes"
              description="Explore thousands of recipes from home cooks and chefs around the globe."
            />
            <FeaturedCard
              title="Share Your Creations"
              description="Upload your own recipes and inspire others with your culinary skills."
            />
            <FeaturedCard
              title="Connect with Foodies"
              description="Join a vibrant community to exchange tips, ideas, and food stories."
            />
          </div>
        </div>
      </section>
    </>
  );
}
