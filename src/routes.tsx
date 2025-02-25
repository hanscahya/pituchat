import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Settings from './pages/Settings';
import ProtectedRoute from './components/common/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: '/settings',
    element: (
      <ProtectedRoute>
        <Settings />
      </ProtectedRoute>
    ),
  },
  {
    path: '*',
    element: <Navigate to="/login" replace />,
  },
]);

export default router;
