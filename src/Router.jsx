import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Details from "./Details";
import SignUp from "./pages/SignUp";
import App from "./App";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/details",
        element: <Details />,
      },
      {
        path: "/sign",
        element: <SignUp />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
