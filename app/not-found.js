// pages/_404.js

import React from "react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="bg-gray-300 h-screen flex justify-center items-center"> 
      <div className="container mx-auto text-center"> 
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-lg text-gray-700">
          Sorry, the page you"re looking for does not exist. Please check the URL or use the button below to return to the main page.
        </p>
        
        <Link href="/">
          <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go Back to Main Page</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
