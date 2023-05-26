import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import AddAToy from "../pages/AddAToy/AddAToy";
import AllToys from "../pages/AllToys/AllToys";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import MyToys from "../pages/MyToys/MyToys";
import SignUp from "../pages/SignUp/SignUp";
import SingleToy from "../pages/SingleToy/SingleToy";
import UpdatedToy from "../pages/UpdatedToy/UpdatedToy";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/alltoys',
          element:<AllToys></AllToys>,
          loader:()=> fetch('https://thunder-toys-server.vercel.app/addtoy')
        },
        {
          path:'/mytoys',
          element:<PrivateRoute><MyToys></MyToys></PrivateRoute>,
          
        },
        {
          path:'/addtoy',
          element:<PrivateRoute><AddAToy></AddAToy></PrivateRoute>
        },
        {
          path:'/updateToy/:id',
          element:<UpdatedToy></UpdatedToy>,
          loader:({params})=>fetch(`https://thunder-toys-server.vercel.app/${params.id}`)
        },
        {
          path:'/toy/:id',
          element:<PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
          loader:({params})=>fetch(`https://thunder-toys-server.vercel.app/${params.id}`)
        }
      ]
    },
  ]);

  export default router;