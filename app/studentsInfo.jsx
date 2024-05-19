"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
        <table className="table-auto border-collapse w-full">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">S.No</th>
              <th className="border border-gray-400 px-4 py-2">Name</th>
              <th className="border border-gray-400 px-4 py-2">Email</th>
              <th className="border border-gray-400 px-4 py-2">Phone</th>
              <th className="border border-gray-400 px-4 py-2">Address</th>
              <th className="border border-gray-400 px-4 py-2">Date of Birth</th>
              <th className="border border-gray-400 px-4 py-2">Course</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.userid}>
                <td className="border border-gray-400 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-400 px-4 py-2">{student.name}</td>
                <td className="border border-gray-400 px-4 py-2">{student.email}</td>
                <td className="border border-gray-400 px-4 py-2">{student.phone}</td>
                <td className="border border-gray-400 px-4 py-2">{student.address}</td>
                <td className="border border-gray-400 px-4 py-2">
  {new Date(student.dob).toLocaleDateString('en-GB').replace(/\//g, '-')}
</td>


                <td className="border border-gray-400 px-4 py-2">{student.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsPage;
