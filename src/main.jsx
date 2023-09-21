import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const myCreatedRouter = createBrowserRouter([
  {
    path: "/",
    element: <div>This is my first router </div>
  },
  {
    path: "/products",
    element: <div>products router</div>
  },
  {
    path: "/about",
    element: <div>about router</div>
  },

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRouter}></RouterProvider>
  </React.StrictMode>,
)
