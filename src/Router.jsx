import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Details from "./pages/Details";
import SignUp from "./pages/SignUp";
import App from "./App";
import Main from "./pages/Main";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Main /> },
      {
        path: "/login",
        element: <Login />,
      },
      {
        // path: "/details",
        path: "/details/:dataId",
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
