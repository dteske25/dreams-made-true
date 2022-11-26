import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "./components/Error";
import Home from "./components/Home";

import dayjs from "dayjs";
import advancedFormat from 'dayjs/plugin/advancedFormat';
dayjs.extend(advancedFormat);

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },
  ],
  { basename: "/dreams-made-true" }
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
