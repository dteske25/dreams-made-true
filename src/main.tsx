import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "./components/Error";
import Home from "./components/Home";

import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { themeOptions } from "./theme";
import { SnackbarProvider } from "notistack";
dayjs.extend(advancedFormat);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
]);

const theme = createTheme(themeOptions);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <RouterProvider router={router} />
      </SnackbarProvider>
    </ThemeProvider>
  </React.StrictMode>
);
