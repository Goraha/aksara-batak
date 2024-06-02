import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ErrorPage from './Pages/404'
import HomeMenuPage from './Pages/home-menu'
import AksaraSimalungunPage from './Pages/aksara-simalungun'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeMenuPage/>,
    errorElement:<ErrorPage/>
  },{
    path: "/aksara-simalungun",
    element: <AksaraSimalungunPage/>
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
