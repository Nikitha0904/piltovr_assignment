"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
const { Input } = require("@/components/ui/input");


const loginFormSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(6),
});

const LoginForm = () => {
  const [username, setUsername] = useState('shadcn');
  const [password, setPassword] = useState('examplepassword');
  const [errorMessage, setErrorMessage] = useState('');
  const [allUsers, setAllUsers] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const form = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

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
    setLoggedIn(false);
  };

  return (
    <div className='min-h-screen bg-gray-100 flex justify-center items-center'>
      {!loggedIn ? (
        <div className="bg-white w-full max-w-sm p-8 rounded-lg shadow-md mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">Login</h2>
          {errorMessage && <p className="text-red-500 mb-4 text-center">{errorMessage}</p>}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <Input
                      placeholder="Username"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      placeholder="Password"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Login
              </Button>
            </form>
          </Form>
        </div>
      ) : ( 
        <div className="w-5/6 grid grid-cols-1 lg:grid-cols-2 gap-12 mx-auto mt-24">
          {allUsers.map((user) => (
            <Card key={user.id} className="rounded-lg shadow-lg hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{user.name}</CardTitle>
                <CardDescription>Username: {user.username}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Email: {user.email}</p>
                <p>Address: {user.address.street}, {user.address.city}, {user.address.zipcode}</p>
                <p>Phone: {user.phone}</p>
                <p>Company: {user.company.name}</p>
              </CardContent>
              <CardFooter>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors mb-2">
                  View
                </button>
              </CardFooter>
            </Card>
          ))}
          <div className='text-center'>
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
