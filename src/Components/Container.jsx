import React from "react";

function Container({ children }) {
  return (
    <div className=" bg-slate-900 ">
      <div className="container mx-auto py-4  ">{children}</div>
    </div>
  );
}

export default Container;
