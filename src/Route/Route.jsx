import React from 'react'
import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layout/MainLayout"
import Home from "../Pages/Home/Home"
import Products from "../Products/Products"


const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/products",
                //fetching loader
                loader: () => fetch('https://dummyjson.com/products'),
                element: <Products></Products>
            },
            {
                path: "/about",
                element: <div>about router</div>
            },
        ]
    },
])


export default myCreatedRoute