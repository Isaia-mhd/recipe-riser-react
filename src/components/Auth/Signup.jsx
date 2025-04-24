import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/axios";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();


  const handleEmailSignUp = (e) => {
    e.preventDefault();
    setError(null);
    api
      .post("/api/register", { name, email, password })
      .then((response) => {
        setSuccess(response.data.message);
        
        setTimeout(()=>{
          setSuccess("");
          navigate("/login");
        }, 2000);

        console.log(response.data);
      })
      .catch((error) => {
        if (error.response) {
          setError(error.response.data.message)
          console.log(error.response.data.message);
          
          setTimeout(()=> {
            setError("");
          }, 2000)
        } else {
          console.log("Unexpected error:", error);
        }
      });

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <section className="bg-gray-800 min-h-screen flex items-center justify-center py-16">
      <div className="container mx-auto px-4 max-w-md">
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6 text-amber-400">
            Sign Up
          </h2>

          {error && (
            <div className="bg-red-600 text-white p-3 rounded-lg mb-4 text-center">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-600 text-white p-3 rounded-lg mb-4 text-center">
              {success}
            </div>
          )}

          {/* Google Sign-In Button */}
          <button className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg flex items-center justify-center gap-2 cursor-pointer mb-4 hover:bg-gray-600 transition  ">
            <FcGoogle className="text-2xl" />
            Sign Up in with Google
          </button>

          <div className="text-center text-gray-400 my-4">OR</div>

          {/* Email/Password Form */}
          <div onSubmit={handleEmailSignUp} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-1">
                Name
              </label>
              <input
                type="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-700 text-gray-200 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Name"
                required
              />
            </div>
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
              onClick={handleEmailSignUp}
              className="w-full bg-amber-400 text-gray-900 px-4 py-3 rounded-lg font-semibold hover:bg-amber-500 transition cursor-pointer"
            >
              Sign Up
            </button>
          </div>

          <p className="text-center text-gray-300 mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-amber-400 hover:underline cursor-pointer"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
