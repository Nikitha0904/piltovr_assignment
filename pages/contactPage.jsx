import React from "react";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const ContactPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl lg:text-5xl font-bold mb-8 text-center font-serif mt-20">Contact Us</h1>
      <div className="flex flex-wrap justify-center">

        <div className="w-full lg:w-3/5 lg:pr-4 mb-8 lg:mb-0">
          
            <div className="mb-6 bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl lg:text-2xl font-semibold mb-4 font-serif">Address</h2>
              <p className="text-md mt-4 text-gray-700 leading-relaxed">
                SHRI VISHNU ENGINEERING COLLEGE FOR WOMEN (Autonomous)<br />
                APPROVED BY A.I.C.T.E & AFFILIATED TO JNTUK, KAKINADA<br />
                Counseling Code – VISW<br />
                Vishnupur, BHIMAVARAM – 534202<br />
                West Godavari District, Andhra Pradesh, India.
              </p>
            </div>

            <div className="mb-8 bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl lg:text-2xl font-semibold mb-4 font-serif">Contact Information</h2>
              <ul className="list-none">
                <li className="mb-2">
                  <span className="font-bold inline-block">Phone:</span> 08816 – 250864
                </li>
                <li className="mb-2">
                  <span className="font-bold inline-block">Fax:</span> 08816 – 250099
                </li>
                <li className="mb-2">
                  <span className="font-bold inline-block">Email:</span> info@svecw.edu.in, principal@svecw.edu.in
                </li>
              </ul>
            </div>
          </div>
       
          <div className="w-full lg:w-2/5 lg:pl-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl lg:text-2xl font-semibold mb-8 font-serif">Department Contacts</h2>
            <ul className="list-none">
              <li className="mb-6">
                <h3 className="text-lg lg:text-xl font-semibold mb-2">Computer Science</h3>
                <p className="mb-2 flex items-center">
                  <HiOutlineMail className="mr-2 hidden sm:block" />
                  <span className="font-semibold inline-block">Email:</span> compsci@svecw.edu.in 
                </p>
                  <p className="mb-2 flex items-center">
                  <HiOutlinePhone className="mr-2 hidden sm:block" />
                  <span className="font-semibold inline-block">Phone:</span> 06789 - 386542
                </p>
              </li>
              <li className="mb-6">
                <h3 className="text-lg lg:text-xl font-semibold mb-2">Electrical Engineering</h3>
                <p className="mb-2 flex items-center">
                  <HiOutlineMail className="mr-2 hidden sm:block" />
                  <span className="font-semibold inline-block">Email:</span> eleceng@svecw.edu.in 
                </p>
                  <p className="mb-2 flex items-center">
                  <HiOutlinePhone className="mr-2 hidden sm:block" />
                  <span className="font-semibold inline-block">Phone:</span> 08765 - 786655
                </p>
              </li>
              <li className="mb-6">
                <h3 className="text-lg lg:text-xl font-semibold mb-2">Mechanical Engineering</h3>
                <p className="mb-2 flex items-center">
                  <HiOutlineMail className="mr-2 hidden sm:block" />
                  <span className="font-semibold inline-block">Email:</span> mecheng@svecw.edu.in 
                </p>
                  <p className="mb-2 flex items-center">
                  <HiOutlinePhone className="mr-2 hidden sm:block" />
                  <span className="font-semibold inline-block">Phone:</span> 08765 - 897453
                </p>
              </li>
              
            </ul>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default ContactPage;
