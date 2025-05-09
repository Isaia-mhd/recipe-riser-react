import React, { useState } from 'react'
import { useAuth } from '../../api/AuthContext';
import { Link } from 'react-router-dom';

export const ForgotPassword = () => {
    const {error, forgotPassword} = useAuth();
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState("");


    const [loading, setLoading] = useState(false);

 

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setLoading(true);
        const suc = await forgotPassword(email);
        if(suc)
        {
            setLoading(false);
            setEmail("");  
            setSuccess("Check your mail for the Link")
            setTimeout(()=>{
              setSuccess("")

            },3000)
        } else{
          setLoading(false)
          setEmail("")
        }
    }
  return (
    <section className="bg-gray-800 min-h-screen flex items-center justify-center py-16">
      <div className="container mx-auto px-4 max-w-md">
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-6 text-amber-400">
            Forgot PassWord
          </h2>

        {success && (
            <div className="bg-green-500 text-white p-3 rounded-lg mb-4 text-center">
              {success}
            </div>
        )}

        {error && (
            <div className="bg-red-600 text-white p-3 rounded-lg mb-4 text-center">
              {error}
            </div>
        )}

          {/* Email/Password Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
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
              />
            </div>
            <button
              type="submit"
              className="w-full bg-amber-400 text-gray-900 px-4 py-3 rounded-lg font-semibold hover:bg-amber-500 transition cursor-pointer"
            >
              {loading ? "Sending..." : "Send Reset Password Link"}
            </button>
          </form>
          
          <p className="text-center text-gray-300 mt-4">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-amber-400 hover:underline cursor-pointer"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
