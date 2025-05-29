import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your authentication logic here
    if (username === 'example' && password === 'password') {
      // Successful login
      console.log('Logged in with:', username, password);
      // Redirect to dashboard or any other page after login
      window.location.href = '/dashboard';
    } else {
      // Failed login
      setError('Invalid username or password');
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        backgroundImage:` url('https://webgradients.com/public/webgradients_png/008%20Rainy%20Ashville.png')`,
        backgroundSize: 'cover',
      }}
    >
      <div className="max-w-md w-full bg-white bg-opacity-75 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-gray-700">Username</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2 text-gray-700">Password</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          {error && <p className="text-sm text-red-500 mb-4">{error}</p>}
          <Link to="/shop">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit">
            Login
          </button>
          </Link>
        </form>
        <p className="text-sm mt-4">
          Don't have an account? <a href="/signup" className="text-blue-500">Sign up here</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;