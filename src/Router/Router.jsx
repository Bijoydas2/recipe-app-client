
import React from 'react';
import { createBrowserRouter } from "react-router";
import Layout from '../MainLayout.jsx/Layout';
import Home from '../Pages/Home';



export const router = createBrowserRouter([
  {
    path: "/",
    Component:Layout,
    children:[
        {
            index:true,
            Component:Home
        },
    ]
  },
]);