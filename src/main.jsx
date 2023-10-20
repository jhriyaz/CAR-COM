import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routes from "./route/Routes";
import AuthContext from "./context/AuthContext";
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={Routes}></RouterProvider>
    </AuthContext>
  </React.StrictMode>,
)
