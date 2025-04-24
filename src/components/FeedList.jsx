import React, { useEffect, useState } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { ImLink } from "react-icons/im";
import { SlLike, SlOptionsVertical } from "react-icons/sl";
import api from "../api/axios";

export default function FeedList() {
  const [isOpen, setIsOpen] = useState(false);
  const [recipeData, setRecipeData] = useState([]);
  const toggleDropdown = () => setIsOpen(!isOpen);
  


  useEffect(() => {
    const fetchData = async() => {
      try {
        const res = await api.get("/api/recipes");
        setRecipeData(res.data.recipes);
        console.log(res.data.recipes);
        
      } catch (error) {
        console.log(error.response.data);
        
      }
    }

    fetchData();
  }, [])
  console.log(recipeData);
  
  return (
    <>
      <div className="w-full min-h-screen bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="w-full max-w-[80%] md:max-w-[40%] mx-auto flex flex-col gap-2">
            {recipeData.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex justify-between">
                  <div className="">
                    <h3 className="text-xl font-bold text-amber-300 mb-2">
                      {recipe.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">
                      by {recipe.user_id} | {recipe.created_at}
                    </p>
                  </div>
                  <button onClick={toggleDropdown} id="dropdown-button">
                    <SlOptionsVertical className="cursor-pointer hover:text-blue-500" />
                  </button>
                  
                </div>
                <p className="text-gray-300">{recipe.description}</p>
                <img
                  src="https://sf2.viepratique.fr/wp-content/uploads/sites/2/2015/03/Tagliatelles-au-bacon-Recette-TagliatelleChampignon.jpg"
                  alt={recipe.title}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <div className="flex justify-end items-center gap-4 text-2xl">
                  <SlLike className="cursor-pointer text-blue-500" />
                  <FaRegCommentDots className="cursor-pointer text-blue-500" />
                  <ImLink className="cursor-pointer text-blue-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
