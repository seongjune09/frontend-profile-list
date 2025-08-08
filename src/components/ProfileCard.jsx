import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import ProfileList from './components/ProfileList';
import MakeCard from './components/MakeCard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'card-list', element: <ProfileList /> },
      { path: 'make-card', element: <MakeCard /> }
    ]
  }
]);

export default function MainRouter() {
  return <RouterProvider router={router} />;
}