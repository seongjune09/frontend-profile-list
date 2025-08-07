// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import CardList from './components/ProfileList.jsx'; 
import MakeCard from './components/ProfileForm.jsx'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,            // ✅ '/' 경로로 들어왔을 때 보여줄 컴포넌트
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