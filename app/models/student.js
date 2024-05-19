import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minlength: [2, "Name must be at least 2 characters"],
    maxlength: [50, "Name must not exceed 50 characters"]
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true, 
    trim: true,
    lowercase: true, 
    match: [/\S+@\S+\.\S+/, "Please enter a valid email address"]
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    trim: true,
    minlength: [10, "Phone number must be 10 digits"],
    maxlength: [10, "Phone number must be 10 digits"]
  },
  address: {
    type: String,
    required: [true, "Address is required"],
    trim: true
  },
  dob: {
    type: Date,
    required: [true, "Date of Birth is required"]
  },
  course: {
    type: String,
    required: [true, "Course is required"],
    trim: true
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true, 
    trim: true
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be at least 8 characters"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
