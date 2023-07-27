import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ElementHomePage } from "./screens/ElementHomePage";
import { Element } from "./screens/Element";
import { ElementScreen } from "./screens/ElementScreen";
import { DivWrapper } from "./screens/DivWrapper";
import { Screen4 } from "./screens/Screen4";
import { Screen5 } from "./screens/Screen5";
import { Screen6 } from "./screens/Screen6";
import { Screen7 } from "./screens/Screen7";
import { Screen8 } from "./screens/Screen8";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <ElementHomePage />,
  },
  {
    path: "/01-home-page",
    element: <ElementHomePage />,
  },
  {
    path: "/03",
    element: <Element />,
  },
  {
    path: "/02",
    element: <ElementScreen />,
  },
  {
    path: "/05",
    element: <DivWrapper />,
  },
  {
    path: "/06",
    element: <Screen4 />,
  },
  {
    path: "/04",
    element: <Screen5 />,
  },
  {
    path: "/07",
    element: <Screen6 />,
  },
  {
    path: "/09",
    element: <Screen7 />,
  },
  {
    path: "/08",
    element: <Screen8 />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
