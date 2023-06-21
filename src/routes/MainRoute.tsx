import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/layout/HomeLayout";
import Enterprise from "../pages/Enterprise";
import Pricing from "../pages/Pricing";
import Home from "../pages/Home";

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
        path: "/pricing",
        element: <Pricing />,
      },
    ],
  },
]);
