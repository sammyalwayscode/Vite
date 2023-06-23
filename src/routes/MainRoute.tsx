import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/layout/HomeLayout";
import Enterprise from "../pages/Enterprise";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Pricing from "../pages/Pricing";
import Resources from "../pages/Resources";
import Community from "../pages/Community";
import Login from "../pages/Login";

export const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/enteprice",
        element: <Enterprise />,
      },
      {
        path: "/product",
        element: <Products />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/resources",
        element: <Resources />,
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
