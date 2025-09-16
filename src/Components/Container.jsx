import React from "react";

function Container({ children }) {
  return (
    <div className=" bg-slate-900 w-full ">
      <div className="w-full mx-auto py-4   ">{children}</div>
    </div>
  );
}

export default Container;
