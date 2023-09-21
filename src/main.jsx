import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Home from './Pages/Home/Home'
import Products from './Products/Products'

// const myCreatedRouter = createBrowserRouter([
// {
//   path: "/",
//   element: <div>This is my first router </div>
// },
// {
//   path: "/products",
//   element: <div>products router</div>
// },
// {
//   path: "/about",
//   element: <div>about router</div>
// },

//   {
//     path: "/",
//     element: <section><div>This is fix iteam </div>
//       <Outlet></Outlet>
//     </section>,
//     children: [
//       {
//         path: "/products",
//         element: <div>products router</div>
//       },
//       {
//         path: "/about",
//         element: <div>about router</div>
//       },
//     ]
//   },
// ])
///////
const myCreatedRouter = createBrowserRouter([
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
        element: <Products></Products>
      },
      {
        path: "/about",
        element: <div>about router</div>
      },
    ]
  },
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRouter}></RouterProvider>
  </React.StrictMode>,
)
