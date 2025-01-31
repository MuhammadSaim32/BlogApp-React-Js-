import React from "react";
import { useForm } from "react-hook-form";
import Auth from "../Appwrite/Auth";
import { useDispatch } from "react-redux";
import { Login as LoginStore } from "../Store/AuthSlice";
import { useNavigate } from "react-router-dom";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const Dispatch = useDispatch();
  const Naviage = useNavigate();

  function submit(data) {
    Auth.Login({ ...data }).then((UserData) => {
      if (UserData) {
        Auth.GetCurrentUser().then((UserData) => {
          Dispatch(LoginStore(UserData));
          Naviage("/");
        });
      }
    });
  }

  return (
    <div className="flex items-center justify-center h-screen w-full bg-gray-800">
      <div className=" max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit(submit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            {errors.Email && (
              <p className="text-red-800 font-bold"> {errors.Email.message} </p>
            )}

            <input
              type="email"
              id="email"
              {...register("Email", {
                required: true,
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Email address must be a valid address",
                },
              })}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            {errors.Password && (
              <p className="text-red-800 font-bold">
                {errors.Password.message}
              </p>
            )}
            <input
              type="password"
              id="Password"
              {...register("Password", {
                required: {
                  value: true,
                  message: "Password Field is Required",
                },
              })}
              className="mt-2 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
