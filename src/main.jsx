import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home'
import NotFoundPage from './Pages/NotFoundPage';
import CardsPage from './Pages/CardsPage';
const router = createBrowserRouter([
  {
    path: '/CarProject/',
    element: <Home />,

  },
  {
    path: '/CarProject/HizmetBolgelerimiz',
    element: <CardsPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
