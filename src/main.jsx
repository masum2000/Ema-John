import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Order from './components/Orders/Order';
import Home from './components/Layout/Home';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartProductsLoader from './loaders/cartProductsLoader';
import Checkout from './components/Checkout/Checkout';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    children:[
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'orders',
        element: <Order></Order>,
        loader: cartProductsLoader,
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },
      {
        path: 'checkout',
        element: <Checkout></Checkout>
      },
      {
        path:'login',
        element: <Login></Login>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
