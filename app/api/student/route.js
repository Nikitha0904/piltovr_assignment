
require('dotenv').config();
import connectDB from "@/lib/mongodb";
import User from "@/models/student";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';


export async function POST(req) {
 
  const { name, email, phone, address, dob, course, username, password } = await req.json();

  try {
    
    await connectDB();
    
   
    const hashedPassword = await bcrypt.hash(password, 10); 
    
    await User.create({ name, email, phone, address, dob, course, username, password: hashedPassword });
    
    
    return NextResponse.json({ msg: "Student details saved successfully", success: true });
  } catch (error) {
    
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      return NextResponse.json({ msg: errorList });
    } else {
      
      return NextResponse.json({ msg: error.message });
    }
  }
}


export async function GET() {
    try {
      
      await connectDB();
      
      const students = await User.find();
      
      return NextResponse.json({ students });
    } catch (error) {
      
      return NextResponse.json({ msg: error.message });
    }
  }
  
  