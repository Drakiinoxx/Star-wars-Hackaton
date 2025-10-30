import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import App from "./App";
import Homepage from "./pages/Homepage";
import ListCharacters from "./pages/ListCharacters";
import SolarSystem from "./pages/SolarSystem";
import Planetes from "./pages/Planetes";
import Vaissseaux from "./pages/Vaisseaux";
import CharacterDetails from "./pages/CharacterDetails";
import Start from "./pages/start";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Start />,
      },
      {
        path: "/home",
        element: <Homepage />,
      },
      {
        path: "/Vaissseaux",
        element: <Vaissseaux />,
      },
      {
        path: "/Vaissseaux/SolarSystem",
        element: <SolarSystem />,
      },
      {
        path: "/SolarSystem/:systemName",
        element: <Planetes />,
      },
      {
        path: "/ListCharacters",
        element: <ListCharacters />,
      },
      { path: "/characters/details/:id", element: <CharacterDetails /> },
      { path: "/characters/:planet", element: <ListCharacters /> },
    ],
  },
]);

const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
