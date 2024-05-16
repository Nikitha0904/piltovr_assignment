"use client"
import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const credentials = {
    "user1": "password1",
    "user2": "password2",
    "user3": "password3",
    "user4": "password4",
  };

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      setErrorMessage('Please enter both username and password.');
      return;
    }

    if (credentials.hasOwnProperty(username)) {
      if (credentials[username] === password) {
        setErrorMessage('');
        setIsLoggedIn(true);
        console.log('Logged in as:', username);
      } else {
        setErrorMessage('Incorrect password.');
      }
    } else {
      setErrorMessage('Username not found.');
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="bg-white w-full max-w-sm p-8 rounded-lg shadow-md ">
        <h2 className="text-2xl font-semibold mb-4 text-center">LOGIN</h2>
        {isLoggedIn ? (
          <p className="text-green-500 mb-4 text-center">Login successful!</p> 
        ) : (
          errorMessage && <p className="text-red-500 mb-4 text-center">{errorMessage}</p>
        )}
        <label htmlFor="username" className="block mb-2 font-semibold">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Username"
          className="w-full mb-4 px-3 py-2 border rounded-md"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password" className="block mb-2 font-semibold">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="w-full mb-4 px-3 py-2 border rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
