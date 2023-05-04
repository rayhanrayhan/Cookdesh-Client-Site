import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import "./../App.css";
import ChefDetailsInfo from "../Pages/ChefDetailsInfo/ChefDetailsInfo";

import Blog from "../Pages/Blog/Blog";
import About from "../Pages/About/About";
import Login from "../Layout/Login/Login";
import Register from "../Layout/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "chef/:id",
        element: <ChefDetailsInfo></ChefDetailsInfo>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chef/${params.id}`),
      },
    ],
  },
]);

export default router;
