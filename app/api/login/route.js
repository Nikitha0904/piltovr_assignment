
require('dotenv').config();
import connectDB from "@/lib/mongodb";
import User from "@/models/student";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';


export async function POST(req) {
  const { username, password } = await req.json();

  try {
    await connectDB();
    
    const user = await User.findOne({ username });
    
    
    if (!user) {
      return NextResponse.json({ msg: "Invalid username or password" });
    }
    

    const passwordMatch = await bcrypt.compare(password, user.password);
    
    
    if (passwordMatch) {
      return NextResponse.json({ msg: "Login successful", user });
    } else {
      return NextResponse.json({ msg: "Invalid username or password" });
    }
  } catch (error) {
    
    return NextResponse.json({ msg: error.message });
  }
}
