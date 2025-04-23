import React from "react";

export default function FeaturedCard({ title, description }) {
  return (
    <>
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
        <h3 className="text-xl font-semibold text-amber-400 mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </>
  );
}
