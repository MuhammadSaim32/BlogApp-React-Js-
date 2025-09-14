import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useFetcher, useNavigate } from "react-router-dom";
import Auth from "../Appwrite/Auth";
import { Logout } from "../Store/AuthSlice";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const Navigate = useNavigate();
  const Dispatch = useDispatch();
  const [DropDownNav, setDropdownNav] = useState(false);
  const AuthStatus = useSelector((state) => state.Auth.Status);
  function LogoutBtn() {
    Auth.Logout().then(() => {
      Dispatch(Logout());
      Navigate("/");
    });
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setDropdownNav(false);
      }
    });
  }, []);

  function dropdown(e) {
    e.stopPropagation();

    setDropdownNav(!DropDownNav);
  }

  function removeDropDownWhenclickonlink(item) {
    if (window.innerWidth < 768) {
      if (item.name == "logout") {
        LogoutBtn();
      }
      setDropdownNav(!DropDownNav);
    }
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
    {
      name: "logout",
      path: "",
      AuthStatus: AuthStatus,
    },
  ];

  return (
    <header className="bg-gray-800 text-gray-300 ">
      <div className="container mx-auto flex items-center justify-between px-4  py-6 relative">
        <Link to="/" className="text-[1.4rem] font-bold">
          BlogApp
        </Link>
        {/* nav links for big screens */}
        <FontAwesomeIcon
          icon={faX}
          className={`${DropDownNav ? "cursor-pointer" : " hidden"}`}
          onClick={dropdown}
        />

        <FontAwesomeIcon
          icon={faBars}
          className={`${DropDownNav ? "hidden" : "hover:cursor-pointer md:hidden"} `}
          onClick={dropdown}
        />
        <nav
          className={`md:block  md:space-x-6 ${DropDownNav ? "rounded-lg flex flex-col absolute right-0 top-16 bg-gray-800 w-32  items-center " : "hidden"}`}
        >
          {Items.map((item) => {
            if (item.name != "logout") {
              return item.AuthStatus ? (
                <NavLink
                  to={`${item.path}`}
                  className={({ isActive }) =>
                    `text-center m-4  p-2 ${isActive ? "text-blue-700 font-bold" : "hover:text-white"}`
                  }
                  key={item.name}
                  onClick={removeDropDownWhenclickonlink}
                >
                  {item.name}
                </NavLink>
              ) : null;
            } else {
              return item.AuthStatus ? (
                <NavLink
                  to={`${item.path}`}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 mb-3 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
                  key={item.name}
                  onClick={(item) => removeDropDownWhenclickonlink(item)}
                >
                  {item.name}
                </NavLink>
              ) : null;
            }
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
