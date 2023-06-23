import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/layout/HomeLayout";
import Enterprise from "../pages/Enterprise";
import Home from "../pages/Home";
import Products from "../pages/Products";

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
    ],
  },
]);
