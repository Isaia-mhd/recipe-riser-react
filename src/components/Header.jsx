import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="bg-gray-900 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-amber-400">RecipeRiser</h1>
          <div className="space-x-4">
            <Link
              to="/"
              className="text-gray-300 hover:text-amber-400 transition"
            >
              Home
            </Link>
            <Link
              to="/recipes"
              className="text-gray-300 hover:text-amber-400 transition"
            >
              Recipes
            </Link>
            <Link
              to="community"
              className="text-gray-300 hover:text-amber-400 transition"
            >
              Community
            </Link>
            <Link
              to="login"
              className="text-gray-300 hover:text-amber-400 transition"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
