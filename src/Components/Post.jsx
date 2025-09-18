import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Service from "../Appwrite/Service";
import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "github-markdown-css/github-markdown.css";
import remarkGfm from "remark-gfm";

function Post() {
  const { Post_Id } = useParams();
  const [Owner, SetOwner] = useState(false);
  const [Post, SetPost] = useState({});
  const [Loading, SetLoading] = useState(true);

  const Navigate = useNavigate();
  const UserData = useSelector((state) => state.UserData);

  useEffect(() => {
    if (Post_Id) {
      Service.GetPost(Post_Id).then((data) => {
        if (UserData.$id == data.User_Id) {
          SetOwner(true);
        }

        SetPost(data);
        SetLoading(false);
      });
    } else {
      Navigate("/");
    }
  }, [Post_Id]);

  function DeletePost() {
    Service.DeleteFile(Post.Image_Id).then(() => {
      Service.DeletePost(Post_Id).then(() => {
        Navigate("/");
      });
    });
  }

  return !Loading ? (
    <div className="">
      <p className="text-white text-center text-3xl py-4 ">{Post.Title}</p>
      <img
        src={Service.GetFilePreview(Post.Image_Id)}
        alt={Post.Title}
        className="rounded-lg object-cover mb-4 m-auto max-h-[30%] px-4 w-[80%] block"
      />
      <div className="w-[80%] m-auto ">
        <div className="markdown-body" style={{ padding: "2rem" }}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {Post.Content}
          </ReactMarkdown>
        </div>
      </div>

      <div>
        {Owner && (
          <div className="bg-red-500 p-2 rounded-md text-white  mt-4 text-center  w-32  h-auto    hover:bg-red-600  right-16">
            <Link to="/EditPost" state={{ Post }}>
              EditPost
            </Link>
          </div>
        )}
      </div>
      <div>
        {Owner && (
          <button
            className="bg-red-500 p-2 rounded-md text-white  mt-4  w-32  h-auto    hover:bg-red-600  right-16"
            onClick={DeletePost}
          >
            DeletePost
          </button>
        )}
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>

        <p className="text-white text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
}

export default Post;
