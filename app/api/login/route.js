require('dotenv').config();
import connectDB from "@/lib/mongodb";
import User from "@/models/student";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';

export async function POST(req) {
  const { username, password } = await req.json();

  try {
    await connectDB();
    
    // Check if the user exists in the database
    const user = await User.findOne({ username });
    
    if (!user) {
      return NextResponse.json({ success: false, msg: "Invalid username or password" });
    }

    // Validate the password if the user exists
    const passwordMatch = await bcrypt.compare(password, user.password);
    
    if (passwordMatch) {
      return NextResponse.json({ success: true, msg: "Login successful", user: { name: user.name, username: user.username, email: user.email } });
    } else {
      return NextResponse.json({ success: false, msg: "Invalid username or password" });
    }
  } catch (error) {
    return NextResponse.json({ success: false, msg: error.message });
  }
}
