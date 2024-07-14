import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import ErrorPage from "./components/routeErrorPage.tsx";
import { DoubleNavbar } from "./components/sidenav/doubleNavbar.tsx";
import { NavbarNested } from "./components/sidenav/sidenav.tsx";

const theme = createTheme({
  /** Put your mantine theme override here */
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/basics",
    element: <>BASICS</>,
    children: [
      {
        path: "basics/javascript",
        element: <>Child</>,
      },
    ],
  },
  {
    path: "/react",
    element: <>React</>,
  },
  {
    path: "/misc",
    element: <>Misc</>,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <NavbarNested />
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);
