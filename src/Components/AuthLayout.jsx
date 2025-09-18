import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function AuthLayout({ authentication = false, children }) {
  const UserStatus = useSelector((state) => state.Status);
  const Navigate = useNavigate();
  useEffect(() => {
    if (authentication && UserStatus == false) {
      Navigate("/");
    }
  }, [Navigate, UserStatus, authentication]);

  return !(authentication && UserStatus == false) ? (
    <div>{children}</div>
  ) : (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>

        <p className="text-white text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
}

export default AuthLayout;
