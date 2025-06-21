import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { AppLayout,AdminLayout} from '../Components/index'
import {Home,About,Projects, Dashboard, Skills, PageNotFound} from '../pages/index'

const UserRoutes = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<AppLayout/>,
      children:([
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/About',
          element:<About/>
        },
        {
          path:'/Projects',
          element:<Projects/>
        },
        {
          path:'/About',
          element:<About/>
        },
        {
          path:'/Skills',
          element:<Skills/>
        },
        {
          path:'*',
          element:<PageNotFound/>
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