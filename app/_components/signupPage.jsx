"use client";
const { zodResolver } = require("@hookform/resolvers/zod");
const { useForm } = require("react-hook-form");
const { z } = require("zod");
const { Button } = require("@/components/ui/button");
const { Form, FormField, FormItem, FormLabel, FormMessage } = require("@/components/ui/form");
const { Input } = require("@/components/ui/input");
const Swal = require('sweetalert2');

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  phone: z.string().length(10),
  address: z.string(),
  dob: z.string(),
  course: z.string(),
  username: z.string().min(2),
  password: z.string().min(6),
  conpassword: z.string().min(6),
});

function SignupForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      dob: "",
      course: "",
      username: "",
      password: "",
      conpassword: "",
    },
  });

  const handleSubmit = async (values) => {
    try {
      const res = await fetch('/api/student', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          Swal.fire({
            icon: 'success',
            title: 'Signup successful!',
            showConfirmButton: false,
            timer: 1500
          });
          form.reset();
        } else {
          throw new Error(data.msg || 'Signup failed. Please try again.');
        }
      } else {
        throw new Error('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Signup failed:', error.message);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message || 'Signup failed. Please try again.',
      });
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className="bg-white w-full max-w-lg p-8 rounded-lg shadow-md mt-24 mb-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">SIGNUP</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <Input placeholder="Enter your name" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <Input placeholder="Enter your email" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <Input placeholder="Enter your phone number" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <Input placeholder="Enter your address" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of Birth</FormLabel>
                  <Input type="date" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="course"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course</FormLabel>
                  <Input placeholder="Enter your course" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <Input placeholder="Enter your username" {...field} />
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
                  <Input type="password" placeholder="Enter your password" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="conpassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <Input type="password" placeholder="Confirm your password" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Signup</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default SignupForm