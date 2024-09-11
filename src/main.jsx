import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './pages/AI/indexAI.jsx'
import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx' //RegisterPage
import ErrorPage from './pages/404.jsx'
import ProductPage from './pages/product.jsx'
import Lobby from './pages/lobby.jsx'
import Perbaikan from '../Pelajaran/false.jsx'
import Hook from '../Pelajaran/usetate.jsx'

const Log = createBrowserRouter([
  
   {
    path: "/",
    element: <Lobby />,
    errorElement: <ErrorPage />
   },
   {
    path: "/login",
    element: <LoginPage />
  },  
   {
    path: "/register",
    element: <RegisterPage />
   },
   {
    path: "/AI",
    element: <App />
   },
   {
    path: "/product",
    element: <ProductPage />
   },
   {
    path: "/perbaikan",
    element: <Perbaikan />
   },
   {
    path: "/useState",
    element: <Hook />
   }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Log} />
  </StrictMode>,
)

