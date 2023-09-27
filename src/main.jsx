import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NavBar from './Components/NavBar/NavBar.jsx';
import Home from './Components/Home/Home.jsx';
import Donation from './Components/Donation/Donation.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import CardDetails from './Components/Home/CardDetails/CardDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBar></NavBar>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/donation',
        element: <Donation></Donation>
      },
      {
        path: '/ststistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/deatles/:id',
        element: <CardDetails></CardDetails>,
        loader: () => fetch('../blog.json')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
