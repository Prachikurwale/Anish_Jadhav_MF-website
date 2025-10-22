import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import CampusAndFacilities from './pages/CampusAndFacilities.jsx';
import GetInvolved from './pages/GetInvolved.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/campus", // Aap URL kuch bhi rakh sakte hain, jaise "/campus-facilities"
        element: <CampusAndFacilities />,
      },
      {
        path: "/involved", // URL aap kuch bhi rakh sakte hain
        element: <GetInvolved />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);









