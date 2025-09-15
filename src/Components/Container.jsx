import React from "react";

function Container({ children }) {
  return (
    <div className=" bg-slate-900 ">
      <div className="w-screen mx-auto py-4  ">{children}</div>
    </div>
  );
}

export default Container;
