import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Rooms from "../pages/room/Rooms";
import ErrorPage from "../pages/ErrorPage";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
          path: "/rooms",
          element: <Rooms></Rooms>
        }
      ]
    },
    {
      path: "/login",
      element: <Login></Login>,
      errorElement: <ErrorPage></ErrorPage>
    },
    {
      path: "/signUp",
      element: <SignUp></SignUp>,
      errorElement: <ErrorPage></ErrorPage>,
    }
  ]);

  export default router