import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import App from "./App";

import Homepage from "./pages/Homepage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
