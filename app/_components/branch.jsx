"use client"
import React, { useState } from 'react';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";

const Branch = () => {
  const [selectedBranch, setSelectedBranch] = useState(null);

  const handleClick = (branch) => {
    setSelectedBranch(branch);
  };

  return (
    <ResizablePanelGroup direction="horizontal" className="h-screen">
      <ResizablePanel defaultSize={30}>
        <div className="bg-gray-200 p-8 mt-20 h-screen">
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
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={70}>
      <div className=" flex justify-center items-center h-full">
          {!selectedBranch ? (
            <img
              src="https://media-exp1.licdn.com/dms/image/C561BAQFkT2Yr6Ga7qw/company-background_10000/0/1595243880011?e=2159024400&v=beta&t=SEwQlRMx2htNGYYB3wbq4du-ySCL1Ylu-y3XgRYPftY"
              alt="branches"
              style={{ maxWidth: "1000px", height: "auto" }}
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
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Branch;
