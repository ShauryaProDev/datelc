import ReactDOM from "react-dom/client";
import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";

import AppLayout from "./AppLayout";
import Home from "./components/Home";
import Features from "./components/Features";
import Tools from "./components/Tools";
import NotFound from "./components/NotFound";

import "./index.css";

const router = createHashRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="home" />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "tools",
        element: <Tools />,
      },
      {
        path: "features",
        element: <Features />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
