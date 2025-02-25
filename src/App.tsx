import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { NavProvider } from './context/NavContext';
import router from './routes';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <NavProvider>
        <RouterProvider router={router} />
      </NavProvider>
    </AuthProvider>
  );
}

export default App;
