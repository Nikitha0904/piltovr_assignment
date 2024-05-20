"use client"
import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableHead, TableCell, TableRow, TableHeader } from "@/components/ui/table"; 

const StudentsPage = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch("/api/student");
      const data = await response.json();
      setStudents(data.students);
      console.log("fetched.......")
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center mt-20">Student Details</h1>
      <div className="overflow-x-auto">
        <Table>
        <TableHeader>
            <TableRow>
              <TableHead>S.No</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Date of Birth</TableHead>
              <TableHead>Course</TableHead>
            </TableRow>
            </TableHeader>
            <TableBody>
            {students.map((student, index) => (
              <TableRow key={student.username}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>{student.phone}</TableCell>
                <TableCell>{student.address}</TableCell>
                <TableCell>{new Date(student.dob).toLocaleDateString('en-GB').replace(/\//g, '-')}</TableCell>
                <TableCell>{student.course}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default StudentsPage;
