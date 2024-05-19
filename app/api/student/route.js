// Import necessary modules and utilities
require('dotenv').config();
import connectDB from "@/lib/mongodb";
import User from "@/models/student";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';

// Handle POST request to add a new student
export async function POST(req) {
  // Extract student data from the request body
  const { name, email, phone, address, dob, course, username, password } = await req.json();

  try {
    // Connect to the MongoDB database
    await connectDB();
    
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password with a salt of 10 rounds
    
    // Create a new student document using the Student model
    await User.create({ name, email, phone, address, dob, course, username, password: hashedPassword });
    
    // Return success response
    return NextResponse.json({ msg: "Student details saved successfully", success: true });
  } catch (error) {
    // Handle validation errors
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      return NextResponse.json({ msg: errorList });
    } else {
      // Handle other errors
      return NextResponse.json({ msg: error.message });
    }
  }
}

// Handle GET request to fetch all students
export async function GET() {
    try {
      // Connect to the MongoDB database
      await connectDB();
      
      // Find all students using the Student model
      const students = await User.find();
      
      // Return list of students
      return NextResponse.json({ students });
    } catch (error) {
      // Handle errors
      return NextResponse.json({ msg: error.message });
    }
  }
  
  