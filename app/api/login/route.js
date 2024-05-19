// Import necessary modules and utilities
require('dotenv').config();
import connectDB from "@/lib/mongodb";
import User from "@/models/student";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';

// Handle POST request for user login
export async function POST(req) {
  // Extract username and password from the request body
  const { username, password } = await req.json();

  try {
    // Connect to the MongoDB database
    await connectDB();
    
    // Find the user by username
    const user = await User.findOne({ username });
    
    // Check if the user exists
    if (!user) {
      return NextResponse.json({ msg: "Invalid username or password" });
    }
    
    // Compare the provided password with the hashed password stored in the database
    const passwordMatch = await bcrypt.compare(password, user.password);
    
    // If passwords match, return success response
    if (passwordMatch) {
      return NextResponse.json({ msg: "Login successful", user });
    } else {
      return NextResponse.json({ msg: "Invalid username or password" });
    }
  } catch (error) {
    // Handle errors
    return NextResponse.json({ msg: error.message });
  }
}
