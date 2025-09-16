import React from "react";
import Service from "../Appwrite/Service";

function Card({ post }) {
  return (
    <>
      <img
        src={Service.GetFilePreview(post.Image_Id)}
        alt={post.Title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 text-center text-lg font-semibold text-gray-800">
        {post.Title.length > 20 ? `${post.Title.slice(0, 20)}...` : post.Title}
      </div>
    </>
  );
}

export default Card;
