
import React from 'react';
import { createBrowserRouter } from "react-router";
import Layout from '../MainLayout.jsx/Layout';
import Home from '../Pages/Home';
import Error from '../Pages/Error';
import AuthLayouts from '../MainLayout.jsx/AuthLayouts';
import Login from '../Pages/Login';

import Resgister from '../Pages/Resgister';
import PrivateRoute from '../Provider/PrivateRoute';
import Allrecipes from '../Pages/Allrecipes';
import Addrecipes from '../Pages/Addrecipes';
import Myrecipes from '../Pages/Myrecipes';
import RecipeDetails from '../Pages/RecipeDetails';



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
          path:'/all-recipes',
          Component:Allrecipes
    
        },
        
       
        {
          path:'/recipes/:id',
          loader:({params})=>fetch(`https://recipe-book-app-server-eight.vercel.app/recipes/${params.id}`),
          element:<PrivateRoute><RecipeDetails></RecipeDetails></PrivateRoute>
        }


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
    },
    {
    path: "/dashboard",
   element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
   children: [
    {
       index: true,
       element: <Overview /> 
     },          
      {
        path:'/add-recipe',
        element:<Addrecipes></Addrecipes>
    
      },

      {
        path:'/my-recipes',
        element:<Myrecipes></Myrecipes>
    
        },
  ]
}

]);