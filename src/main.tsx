import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Error from "./components/Error";
import { paths } from "./routes";
import Admin from "./components/Admin";
import Home from "./components/Home";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: paths.admin,
      element: <Admin />,
    },
  ],
  { basename: "/dreams-made-true" }
);

ReactDOM.createRoot(document.getElementById("page-top") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
