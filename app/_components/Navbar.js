"use client"
import React, { useState } from 'react';
import { TfiAlignJustify } from "react-icons/tfi";
import { BsChevronDown } from 'react-icons/bs'; // Importing the arrow icon
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = (id) => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const menuList = [
    { id: 1, name: 'About Us', path: '/about' },
    {
      id: 2,
      name: 'Departments',
      subItems: [
        { id: 'compSci', name: 'Computer Science', path: '/departments/computer-science' },
        { id: 'elecEng', name: 'Electrical Engineering', path: '/departments/electrical-engineering' },
        { id: 'mechEng', name: 'Mechanical Engineering', path: '/departments/mechanical-engineering' }
      ]
    },
    { id: 3, name: 'Contact Us', path: '/contact' }
  ];

  return (
    <nav className='bg-white'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <div className="flex items-center">
                <Image src={'/logo.png'} width={60} height={60} alt='logo' />
                <div className="ml-2">
                  <h2 className="hidden lg:block text-black text-lg font-bold">Shri Vishnu Engineering College For Women</h2>
                  <h2 className="sm:block lg:hidden text-black text-lg font-bold">SVECW</h2>
                  <h3 className="hidden lg:block text-black text-sm">Bhimavaram, Andhra Pradesh</h3>
                  <h3 className="sm:block lg:hidden text-black text-sm">Bvrm, Andhra Pradesh</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='hidden sm:block'>
            <div className='ml-4 flex items-center space-x-4'>
              {menuList.map((menuItem) => (
                <div key={menuItem.id}>
                  {menuItem.subItems ? (
                    <div
                      className={`relative ${activeMenu === menuItem.id && 'block'}`}
                      onMouseEnter={() => toggleMenu(menuItem.id)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button className='text-black  hover:text-blue-700 hover:font-bold p-2 flex items-center' onClick={() => toggleMenu(menuItem.id)}>
                        <span>{menuItem.name}</span> <BsChevronDown className="ml-1" />
                      </button>
                      {activeMenu === menuItem.id && (
                        <div className="absolute mt-0 top-full left-0 bg-white shadow-lg rounded-sm">
                          {menuItem.subItems.map((subItem) => (
                            <a key={subItem.id} href={subItem.path} className='block px-6 py-2 text-gray-800 hover:bg-gray-200'>{subItem.name}</a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a href={menuItem.path} className='text-black  hover:text-blue-700 hover:font-bold rounded-lg p-2'>
                      {menuItem.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className='sm:hidden flex items-center'>
            <button className='inline-flex items-center justify-center p-2 rounded-sm text-black sm:text-black hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              onClick={toggleNavbar}>
              <TfiAlignJustify />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='sm:hidden bg-white mt-2'>
          <div className='ml-4 flex flex-col space-y-4'>
            {menuList.map((menuItem) => (
              <div key={menuItem.id}>
                {menuItem.id === 2 ? (
                  <div className={`relative ${activeMenu === menuItem.id && 'block'} ${activeMenu === menuItem.id && 'bg-gray-100'}`}>
                    <div className="flex items-center justify-between hover:bg-gray-100 rounded-lg text-black hover:text-blue-700 hover:font-bold p-2">
                    
                      <span>{menuItem.name}</span>
                      <button onClick={() => toggleMenu(menuItem.id)}>
                        <span className='justify-end'><BsChevronDown /></span>
                      </button>
                    </div>
                    {activeMenu === menuItem.id && (
                      <div className="mt-2 bg-white shadow-lg rounded-md">
                        {menuItem.subItems.map((subItem, index) => (
                          <a key={index} href={subItem.path} className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>{subItem.name}</a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a href={menuItem.path} className='block hover:bg-gray-100  rounded-lg text-black hover:text-blue-700 hover:font-bold  p-2'>
                    {menuItem.name}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}




    </nav>


  );

};

export default Navbar;
