import logo from '/pituchat-logo-art.svg';
import './LoginForm.css';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    navigate('/');
  };

  return (
    <form className="w-full max-w-md">
      <img src={logo} alt="PituChat Logo" className="mb-6 h-20 w-20" />
      <h1 className="mb-2 text-3xl font-bold">Login ke akunmu</h1>
      <h2 className="mb-6 text-lg">Masuk akun untuk menggunakan PituChat</h2>

      <div className="form-item">
        <label htmlFor="email">Email</label>
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-3 text-gray-700" />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Masukkan email"
            className="pl-10"
          />
        </div>
      </div>

      <div className="form-item">
        <label htmlFor="password">Password</label>
        <div className="relative">
          <FaLock className="absolute left-3 top-3 text-gray-700" />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Masukkan password"
            className="pl-10"
          />
        </div>
        <div className="mt-2 text-right">
          <button type="button" className="text-sm text-gray-500">
            Lupa password?
          </button>
        </div>
      </div>

      <button
        type="button"
        className="w-full rounded-md bg-blue-500 p-2 text-white"
        onClick={handleSubmit}
      >
        Masuk
      </button>
    </form>
  );
};

export default LoginForm;
