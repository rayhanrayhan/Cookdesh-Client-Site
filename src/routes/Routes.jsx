import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import "./../App.css";
import ChefDetailsInfo from "../Pages/ChefDetailsInfo/ChefDetailsInfo";

import Blog from "../Pages/Blog/Blog";

import Login from "../Layout/Login/Login";
import Register from "../Layout/Register/Register";
import Error from "../Pages/Error/Error";
import PrivetRoutes from "./PrivetRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        element: (
          <PrivetRoutes>
            <ChefDetailsInfo></ChefDetailsInfo>
          </PrivetRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chef/${params.id}`),
      },
    ],
  },
]);

export default router;
