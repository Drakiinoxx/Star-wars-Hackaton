import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import App from "./App";
import Homepage from "./pages/Homepage";
import CardCharaters from "./components/CardCharaters";
import ListCharacters from "./components/ListCharacters";
import SolarSystem from "./pages/SolarSystem";
import Planetes from "./pages/Planetes";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/ListCharacters",
        element: <ListCharacters />,
      },
      {
        path:"/SolarSystem",
        element: <SolarSystem/>
      },
      {
        path:"/SolarSystem/:systemName",
        element:<Planetes/>
      }
    ],
  },
]);

const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
