"use client";
import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [allUsers, setAllUsers] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
    if (username.trim() === '' || password.trim() === '') {
      setErrorMessage('Please enter both username and password.');
      return;
    }

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.msg);
      }

      setLoggedIn(true);
      setErrorMessage('');

      const allUsersRes = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!allUsersRes.ok) {
        throw new Error('Failed to fetch users data');
      }
      const allUsersData = await allUsersRes.json();
      setAllUsers(allUsersData.filter(user => user.username !== username));

      setUsername('');
      setPassword('');

    } catch (error) {
      console.error(error);
      setErrorMessage(error.message || 'An error occurred while logging in.');
    }
  };

  const clearForm = () => {
    setUsername('');
    setPassword('');
    setAllUsers([]);
    setErrorMessage('');
    setLoggedIn(false); // Set login status to false
  };

  return (
    <div className='min-h-screen bg-gray-100 flex justify-center items-center'>
      {!loggedIn ? (
        <div className="bg-white w-full max-w-sm p-8 rounded-lg shadow-md mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Login</h2>
          {errorMessage && <p className="text-red-500 mb-4 text-center">{errorMessage}</p>}
          <label htmlFor="username" className="block mb-2 font-semibold text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password" className="block mb-2 font-semibold text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="w-full mb-4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
      ) : (
        <div className="w-5/6 grid grid-cols-1 lg:grid-cols-2 gap-12 mx-auto mt-24">
          {allUsers.map((user) => (
            <div key={user.id} className="rounded-lg shadow-lg hover:shadow-lg transition-shadow p-8 bg-white">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 text-center">{user.name}</h3>
              <p className="text-gray-700"><strong>Username:</strong> {user.username}</p>
              <p className="text-gray-700"><strong>Email:</strong> {user.email}</p>
              <p className="text-gray-700"><strong>Address:</strong> {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
              <p className="text-gray-700"><strong>Phone:</strong> {user.phone}</p>
              <p className="text-gray-700"><strong>Company:</strong> {user.company.name}</p>
            </div>
          ))}
         <div className='flex items-center '>
  <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors mb-2" onClick={clearForm}>
    Back
  </button>
</div>

        </div>
      )}
    </div>
  );
};

export default LoginForm;
