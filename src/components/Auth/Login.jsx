import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // Handle Email/Password Sign-In (placeholder)
  const handleEmailSignIn = (e) => {
    e.preventDefault();
    setError(null);
    // Add email/password auth logic here (e.g., using Firebase signInWithEmailAndPassword)
    console.log("Email Sign-In attempted with:", email, password);
  };

  return (
    <section className="bg-gray-800 min-h-screen flex items-center justify-center py-16">
      <div className="container mx-auto px-4 max-w-md">
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6 text-amber-400">
            Sign In
          </h2>

          {error && (
            <div className="bg-red-600 text-white p-3 rounded-lg mb-4 text-center">
              {error}
            </div>
          )}

          {/* Google Sign-In Button */}
          <button className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 cursor-pointer mb-4 hover:bg-gray-600 transition  ">
            <FcGoogle className="text-2xl"/>
            Sign in with Google
          </button>

          <div className="text-center text-gray-400 my-4">OR</div>

          {/* Email/Password Form */}
          <div onSubmit={handleEmailSignIn} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-700 text-gray-200 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-300 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-700 text-gray-200 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              onClick={handleEmailSignIn}
              className="w-full bg-amber-400 text-gray-900 px-4 py-3 rounded-lg font-semibold hover:bg-amber-500 transition cursor-pointer"
            >
              Sign In
            </button>
          </div>
          <div className="text-center mt-3">
            <Link
              to="/forgot-password"
              class="transform text-center font-semibold text-blue-500 duration-300 hover:text-blue-600 cursor-pointer"
            >
              FORGOT PASSWORD?
            </Link>
          </div>
          <p className="text-center text-gray-300 mt-4">
            Don’t have an account?{" "}
            <Link to="/register" className="text-amber-400 hover:underline cursor-pointer">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
