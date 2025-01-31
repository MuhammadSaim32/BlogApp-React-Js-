import React from "react";
import AddPost from "./AddPost";
import { useLocation } from "react-router-dom";
function EditPost() {
  const Location = useLocation();
  return <AddPost post={Location.state.Post} />;
}

export default EditPost;
