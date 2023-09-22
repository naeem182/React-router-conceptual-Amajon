import React from 'react'
import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../Layout/MainLayout"
import Home from "../Pages/Home/Home"
import Products from "../Products/Products"
import Product from '../Pages/Home/Product/Product'
import DashboardLayout from '../Dashboard/DashboardLayout'
import Dashboard from '../Dashboard/Dashboard'
import DashProfile from '../Dashboard/DashProfile'
import EditProfile from '../Dashboard/EditProfile'


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
                path: "/products/:pid",
                //fetching loader
                // loader: ({ params }) => fetch(`https://dummyjson.com/products/${params.pid}`),
                element: <Product></Product>
            },
            {
                path: "/about",
                element: <div>about router</div>
            },
            {
                path: "/dashboard",
                element: <DashboardLayout></DashboardLayout>,

                children: [
                    {
                        path: "/dashboard",
                        element: <Dashboard></Dashboard>
                    },
                    {
                        path: "/dashboard/profile",
                        element: <DashProfile></DashProfile>
                    },
                    {
                        path: "/dashboard/profileedit",
                        element: <EditProfile></EditProfile>
                    },
                ]
            },

        ]
    },
])


export default myCreatedRoute
