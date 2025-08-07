import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import CardList from './components/ProfileForm.jsx'; 
import MakeCard from './components/ProfileList.jsx'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,           
        element: <Home />,
      },
      {
        path: 'Home',
        element: <Home />,
      },
      {
        path: 'ProfileList', 
        element: <CardList />,
      },
      {
        path: 'ProfileForm',
        element: <MakeCard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);