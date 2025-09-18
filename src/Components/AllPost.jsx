import React, { useEffect, useState } from "react";
import Service from "../Appwrite/Service";
import { Link } from "react-router-dom";
import { Card } from "./index";
function AllPost() {
  const [post, SetPost] = useState([]);
  const [Loading, SetLoading] = useState(true);

  useEffect(() => {
    Service.GetPosts().then((data) => {
      SetPost(data.documents);
      SetLoading(false);
    });
  }, []);

  if (Loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-800">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>

          <p className="text-white text-lg font-medium">Loading...</p>
        </div>
      </div>
    );
  } else if (post?.length > 0) {
    return (
      <div className="bg-gray-800 h-screen max-h-auto">
        <div className="flex justify-around p-4  gap-4 flex-wrap   max-h-auto ">
          {post &&
            post.map((data) => {
              return (
                <Link
                  to={`/post/${data.$id}`}
                  key={data.$id}
                  className="bg-white shadow-md rounded-lg overflow-hidden block w-full h-25  sx:w-40   xs:w-60 xs:max-w-[270px]  xs:min-w-[200px]"
                >
                  <Card post={{ ...data }} />
                </Link>
              );
            })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-800">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            No Posts Available
          </h2>
          <p className="text-lg text-gray-300">
            There are currently no posts available. Please check back later.
          </p>
        </div>
      </div>
    );
  }
}

export default AllPost;
