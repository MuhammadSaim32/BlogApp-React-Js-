import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Auth from "../Appwrite/Auth";
import { Logout } from "../Store/AuthSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const Navigate = useNavigate();
  const Dispatch = useDispatch();
  const AuthStatus = useSelector((state) => state.Auth.Status);
  function LogoutBtn() {
    Auth.Logout().then(() => {
      Dispatch(Logout());
      Navigate("/");
    });
  }

  const Items = [
    {
      name: "Home",
      path: "/",
      AuthStatus: true,
    },
    {
      name: "AddPost",
      path: "/AddPost",
      AuthStatus: AuthStatus,
    },
    {
      name: "Login",
      path: "/Login",
      AuthStatus: !AuthStatus,
    },
    {
      name: "Signup",
      path: "/signup",
      AuthStatus: !AuthStatus,
    },
    {
      name: "AllPost",
      path: "/AllPost",
      AuthStatus: AuthStatus,
    },
  ];

  return (
    <header className="bg-gray-800 text-gray-300 ">
      <div className="container mx-auto flex items-center justify-between px-4  py-6">
        <Link to="/" className="text-2xl font-bold">
          BlogApp
        </Link>

        <nav className="space-x-6">
          {Items.map((item) => {
            return item.AuthStatus ? (
              <NavLink
                to={`${item.path}`}
                className={({ isActive }) =>
                  isActive ? "text-blue-700 font-bold" : "hover:text-white"
                }
                key={item.name}
              >
                {item.name}
              </NavLink>
            ) : null;
          })}
          {AuthStatus && (
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
              onClick={LogoutBtn}
            >
              Logout
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
