import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { AppLayout,AdminLayout} from '../Components/index'
import {Home,About,Projects, Dashboard} from '../pages/index'

const UserRoutes = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<AppLayout/>,
      children:([
        {
          path:'/',
          element:<Home/>
        }
      ])
    },
    {
      path:'/Dashboard',
      element:<Dashboard/>
    }
  ])

  return (
    <RouterProvider router ={router} />
  )
}

export default UserRoutes