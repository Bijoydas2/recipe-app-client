
import React from 'react';
import { createBrowserRouter } from "react-router";
import Layout from '../MainLayout.jsx/Layout';
import Home from '../Pages/Home';
import Error from '../Pages/Error';
import AuthLayouts from '../MainLayout.jsx/AuthLayouts';
import Login from '../Pages/Login';

import Resgister from '../Pages/Resgister';



export const router = createBrowserRouter([
  {
    path: "/",
    Component:Layout,
    children:[
        {
            index:true,
            Component:Home
        },
        {

        },


    ]
  },
   {
      path: "/*",
      Component:Error,
    },
    {
      path:'/auth',
      Component:AuthLayouts,
      children:[
        {
          path:"/auth/login",
          Component:Login
        },
        {
          path:"/auth/register",
          Component:Resgister
        },
      ]
    }
]);