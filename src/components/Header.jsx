import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../api/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login")
  }
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
            {user && (
              <>
                {/* RECIPES */}
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

                {/* LOGOUT */}
                <button
                  onClick={handleLogout}
                  className="text-white hover:text-amber-400 transition cursor-pointer bg-red-700 px-2 font-semibold py-0.5 rounded-md"
                >
                  Logout
                </button>
              </>
            )}

            {!user && (
              <>
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
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
