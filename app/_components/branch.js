"use client"
import React, { useState } from 'react';

const Branch = () => {
  const [selectedBranch, setSelectedBranch] = useState(null);

  const handleClick = (branch) => {
    setSelectedBranch(branch);
  };

  return (
    <div className="flex flex-wrap p-2 h-screen">
      <div className="w-full md:w-1/3 lg:w-1/4 bg-gray-200 p-8 mt-20">
        <h2 className="text-xl font-bold mb-4">Branches</h2>
        <button
          className={`w-full py-2 mb-2 text-left ${
            selectedBranch === 'Bhimavaram' ? 'bg-green-500 text-white' : 'bg-gray-300'
          }`}
          onClick={() => handleClick('Bhimavaram')}
        >
          Bhimavaram
        </button>
        <button
          className={`w-full py-2 text-left ${
            selectedBranch === 'Hyderabad' ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
          onClick={() => handleClick('Hyderabad')}
        >
          Hyderabad
        </button>
      </div>
      <div className="w-full md:w-2/3 lg:w-3/4 mt-4 md:mt-20 flex justify-center items-center">
        {!selectedBranch ? (
          <img
            src="https://media-exp1.licdn.com/dms/image/C561BAQFkT2Yr6Ga7qw/company-background_10000/0/1595243880011?e=2159024400&v=beta&t=SEwQlRMx2htNGYYB3wbq4du-ySCL1Ylu-y3XgRYPftY"
            alt="branches"
            style={{ width: "1000px", height: "auto" }}
          />
        ) : (
          <div
            className={`h-full w-full ${
              selectedBranch === 'Bhimavaram' ? 'bg-green-200' : 'bg-blue-200'
            } flex justify-center items-center`}
          >
            <h2 className="text-4xl font-bold">
              {selectedBranch}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Branch;
