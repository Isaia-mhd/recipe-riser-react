import React, { useEffect, useState } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { ImLink } from "react-icons/im";
import { SlLike, SlOptionsVertical } from "react-icons/sl";
import api from "../api/axios";
import { Spinner } from "./Spinner";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { ReviewCard } from "./Review/ReviewCard";

dayjs.extend(relativeTime);

export default function FeedList() {
  const [isLoading, setIsLoading] = useState(false);
  const [recipeData, setRecipeData] = useState([]);
  const [openedCommentId, setOpenedCommentId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await api.get("/api/recipes");
        setRecipeData(res.data.recipes);
        console.log(res.data.recipes);
      } catch (error) {
        console.log(error.response.data);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log(recipeData);

  return (
    <>
      {isLoading && <Spinner />}
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
                      {recipe?.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">
                      by {recipe.user?.name} |{" "}
                      {dayjs(recipe.created_at).fromNow()}
                    </p>
                  </div>
                  <button id="dropdown-button">
                    <SlOptionsVertical className="cursor-pointer hover:text-blue-500" />
                  </button>
                </div>
                <p className="text-gray-300 pb-4">
                  {recipe.description ? (
                    <span>
                      <span className="text-gray-400 text-lg font-bold underline cursor-pointer">
                        Description:
                      </span>{" "}
                      {recipe.description}
                    </span>
                  ) : (
                    ""
                  )}
                </p>

                {recipe.ingredients &&
                  (() => {
                    let ingredients = [];

                    try {
                      ingredients = JSON.parse(recipe.ingredients);
                    } catch (error) {
                      console.error(
                        "Error of ingredients parsing  :",
                        error
                      );
                    }

                    return (
                      Array.isArray(ingredients) &&
                      ingredients.length > 0 && (
                        <div className="text-gray-300 pb-4">
                          <span className="text-gray-400 text-lg font-bold underline cursor-pointer">
                            Ingredients:
                          </span>
                          <ul className="list-disc list-inside">
                            {ingredients.map((ingredient, i) => (
                              <li key={i}>
                                {ingredient.name} — {ingredient.quantity}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    );
                  })()}

                <p className="text-gray-300 pb-4">
                  {recipe.instructions ? (
                    <span>
                      <span className="text-gray-400 text-lg font-bold underline cursor-pointer">
                        Instructions:
                      </span>{" "}
                      {recipe.description}
                    </span>
                  ) : (
                    ""
                  )}
                </p>

                <img
                  src="https://sf2.viepratique.fr/wp-content/uploads/sites/2/2015/03/Tagliatelles-au-bacon-Recette-TagliatelleChampignon.jpg"
                  alt={recipe?.title}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <div className="flex justify-between items-center gap-4 text-2xl">
                  <div className="flex items-center justify-start gap-4">
                  <SlLike className="cursor-pointer text-blue-500" />
                  <ImLink className="cursor-pointer text-blue-500" />
                  </div>
                  
                  <div className="flex justify-end items-center gap-2">
                  <span className="text-[16px]">{recipe.reviews?.length}</span>  
                  <FaRegCommentDots className="cursor-pointer text-blue-500" onClick={()=> setOpenedCommentId(openedCommentId == recipe.id ? null : recipe.id )}/>  
                  </div>
                </div>

                {openedCommentId === recipe.id && (
                  <ReviewCard reviews={recipe.reviews} recipeId={recipe.id} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
