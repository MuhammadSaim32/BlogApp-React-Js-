import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to My Blog
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Discover amazing content and stay updated with the latest posts.
        </p>
        <Link
          to={"/AllPost"}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
        >
          Explore Posts
        </Link>
      </div>
    </div>
  );
}

export default Home;
