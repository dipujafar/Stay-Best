import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Rooms from "../pages/room/Rooms";
import ErrorPage from "../pages/ErrorPage";
import RoomDetails from "../pages/room/RoomDetails";
import PrivateRoute from "./PrivateRoute";
import MyBooking from "../pages/myBooking/MyBooking";
import ContractUs from "../pages/ContractUs";


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
        },
        {
          path: "roomDetails/:id",
          element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute> ,
          loader: ({params}) => fetch(`https://stay-best-server.vercel.app/rooms/${params.id}`)
        },
        {
          path:"myBooking",
          element: <PrivateRoute><MyBooking></MyBooking></PrivateRoute>
        },
        {
          path: "contract",
          element: <ContractUs></ContractUs>
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