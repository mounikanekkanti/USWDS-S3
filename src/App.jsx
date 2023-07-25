import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ElementHomePage } from "./screens/ElementHomePage";
import { ElementGlossary } from "./screens/ElementGlossary";
import { ElementContact } from "./screens/ElementContact";
import { ElementDataSet } from "./screens/ElementDataSet";
import { ElementReleaseNotes } from "./screens/ElementReleaseNotes";
import { ElementDataExplorer } from "./screens/ElementDataExplorer";

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
    path: "/10-glossary",
    element: <ElementGlossary />,
  },
  {
    path: "/09-contact",
    element: <ElementContact />,
  },
  {
    path: "/03-data-set-3",
    element: <ElementDataSet />,
  },
  {
    path: "/07-release-notes",
    element: <ElementReleaseNotes />,
  },
  {
    path: "/08-data-explorer",
    element: <ElementDataExplorer />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
