import React from "react";

function Container({ children }) {
  return (
    <div className=" bg-slate-900  w-full">
      <div className=" mx-auto py-4 w-full ">{children}</div>
    </div>
  );
}

export default Container;
