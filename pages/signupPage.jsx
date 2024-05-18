"use client";
import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const initialFormData = {
    name: '',
    email: '',
    phone: '',
    address: '',
    dob: '',
    course: '',
    username: '',
    password: '',
    conpassword: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [error, setError] = useState('');
  const [invalidPhone, setInvalidPhone] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const clearForm = () => {
    setFormData(initialFormData);
    setPasswordMatch(true);
    setInvalidPhone('');
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setInvalidPhone('');
    if (!/^\d{10}$/.test(formData.phone) || formData.phone.startsWith('0')) {
      setInvalidPhone('Invalid phone number');
      return;
    }

    if (formData.password !== formData.conpassword) {
      setPasswordMatch(false);
      return;
    }
  
    try {
      await axios.post('http://localhost:3000/api/signup', formData);
      setError('');
      setSignupSuccess(true);
      clearForm(); 
    } catch (error) {
      console.error('Signup failed:', error);
      setError('Signup failed. Please try again.');
    }
  };
  
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className="bg-white w-full max-w-lg p-8 rounded-lg shadow-md mt-24 mb-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">SIGNUP</h2>
        {signupSuccess ? ( 
          <div className="text-green-500 mb-4 text-center">Signup successful!</div>
        ) : null}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-4">
            <div>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                placeholder="Name" 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" 
              />
            </div>
            <div>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                placeholder="Email" 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" 
              />
            </div>
            <div>
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
                placeholder="Phone Number" 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" 
              />
              {invalidPhone && <p className="text-red-500">Phone number must be 10 digits</p>}

            </div>
            <div>
              <input 
                type="text" 
                name="address" 
                value={formData.address} 
                onChange={handleChange} 
                required 
                placeholder="Address" 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" 
              />
            </div>
            <div>
              <label htmlFor="dob" className="block mb-1 text-gray-400">Date of Birth:</label>
              <input 
                type="date" 
                name="dob" 
                value={formData.dob} 
                onChange={handleChange} 
                required 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-gray-400"  
                style={formData.dob ? { color: 'black' } : {}}
              />
            </div>
            <div>
              <input 
                type="text" 
                name="course" 
                value={formData.course} 
                onChange={handleChange} 
                required 
                placeholder="Course" 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" 
              />
            </div>
            <div>
              <input 
                type="text" 
                name="username" 
                value={formData.username} 
                onChange={handleChange} 
                required 
                placeholder="Username" 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" 
              />
            </div>
            <div>
              <input 
                type="password" 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
                required 
                placeholder="Password" 
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" 
              />
            </div>
            <div>
              <input 
                type="password" 
                name="conpassword" 
                value={formData.conpassword} 
                onChange={handleChange} 
                required 
                placeholder="Confirm Password" 
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 ${!passwordMatch ? 'border-red-500' : ''}`} 
              />
              {!passwordMatch && <p className="text-red-500">Passwords do not match</p>}
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;

