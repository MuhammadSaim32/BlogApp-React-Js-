import React from "react";
import Service from "../Appwrite/Service";

function Card({ post }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-60">
        <img
          src={Service.GetFilePreview(post.Image_Id)}
          alt={post.Title}
          className="w-full h-40 object-cover"
        />
        <div className="p-4 text-center text-lg font-semibold text-gray-800">
          {post.Title.length > 20
            ? `${post.Title.slice(0, 20)}...`
            : post.Title}
        </div>
      </div>
    </div>
  );
}

export default Card;
