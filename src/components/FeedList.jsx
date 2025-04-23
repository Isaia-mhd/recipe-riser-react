import React, { useState } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { ImLink } from "react-icons/im";
import { SlLike, SlOptionsVertical } from "react-icons/sl";

export default function FeedList() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const feedData = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      description:
        "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
      author: "John Doe",
      date: "2025-04-22",
      image:
        "https://sf2.viepratique.fr/wp-content/uploads/sites/2/2015/03/Tagliatelles-au-bacon-Recette-TagliatelleChampignon.jpg",
    },
    {
      id: 2,
      title: "Vegetarian Tacos",
      description:
        "Delicious and healthy tacos filled with roasted vegetables and topped with guacamole.",
      author: "Jane Smith",
      date: "2025-04-20",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7yHh2khz39rvysPu5UlntIi08viPn8Zgsdg&s",
    },
    {
      id: 3,
      title: "Chicken Alfredo",
      description:
        "A creamy pasta dish made with chicken, garlic, butter, and Parmesan cheese.",
      author: "Alice Cooper",
      date: "2025-04-18",
      image:
        "https://assets.afcdn.com/album/D20230324/phalbm26134168_w2000h2000c1.jpg",
    },
  ];
  return (
    <>
      <div className="w-full min-h-screen bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="w-full max-w-[80%] md:max-w-[40%] mx-auto flex flex-col gap-2">
            {feedData.map((post) => (
              <div
                key={post.id}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex justify-between">
                  <div className="">
                    <h3 className="text-xl font-bold text-amber-300 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">
                      by {post.author} | {post.date}
                    </p>
                  </div>
                  <button onClick={toggleDropdown} id="dropdown-button">
                    <SlOptionsVertical className="cursor-pointer hover:text-blue-500" />
                  </button>
                  
                </div>
                <p className="text-gray-300">{post.description}</p>
                <img
                  src={post.image}
                  alt={post.title}
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
