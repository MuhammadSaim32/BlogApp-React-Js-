import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./Store/Store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import AddPostPage from "./Pages/AddPostPage.jsx";
import PostPage from "./Pages/PostPage.jsx";
import HomePage from "./Pages/HomePage.jsx";
import EditPostPage from "./Pages/EditPostPage.jsx";
import AllPostPage from "./Pages/AllPost.jsx";
import AuthLayout from "./Components/AuthLayout.jsx";
const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/signup",
        element: (
          <AuthLayout>
            <SignUpPage />
          </AuthLayout>
        ),
      },
      {
        path: "/Login",
        element: (
          <AuthLayout>
            <LoginPage />
          </AuthLayout>
        ),
      },
      {
        path: "/AddPost",
        element: (
          <AuthLayout authentication={true}>
            <AddPostPage />
          </AuthLayout>
        ),
      },
      {
        path: "/Post/:Post_Id",
        element: (
          <AuthLayout authentication={true}>
            <PostPage />
          </AuthLayout>
        ),
      },
      {
        path: "/",
        element: (
          <AuthLayout>
            <HomePage />
          </AuthLayout>
        ),
      },
      {
        path: "/EditPost",
        element: (
          <AuthLayout authentication={true}>
            <EditPostPage />
          </AuthLayout>
        ),
      },
      {
        path: "/AllPost",
        element: (
          <AuthLayout authentication={true}>
            <AllPostPage />
          </AuthLayout>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={route} />
  </Provider>
);
