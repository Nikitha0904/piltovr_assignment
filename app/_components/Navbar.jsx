"use client"
import React, { useState } from 'react';
import { TfiAlignJustify } from "react-icons/tfi";
import { BsChevronDown, BsX } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

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
    { id: 1, name: 'Home', path: '/' },

    { id: 2, name: 'About Us', path: '/about' },
    {
      id: 3,
      name: 'Departments',
      subItems: [
        { id: 'compSci', name: 'Computer Science', path: '#' },
        { id: 'elecEng', name: 'Electrical Engineering', path: '#' },
        { id: 'mechEng', name: 'Mechanical Engineering', path: '#' }
      ]
    },
    { id: 4, name: 'Contact Us', path: '/contact' }
  ];

  return (
    <nav className='bg-navy  fixed w-full mt-0'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-20'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <div className="flex items-center">
                <Image src={'/logo.png'} width={65} height={65} alt='logo' />
                <div className="ml-2">
                  <h2 className="hidden lg:block text-white text-lg font-bold">Shri Vishnu Engineering College For Women</h2>
                  <h3 className="hidden lg:block text-white text-md">Bhimavaram, Andhra Pradesh</h3>
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
                      <button className='text-white font-serif hover:white text-xl hover:font-bold p-1.5 flex items-center' onClick={() => toggleMenu(menuItem.id)}>
                        <span>{menuItem.name}</span>  <BsChevronDown className="ml-1" />
                      </button>
                      {activeMenu === menuItem.id && (
                        <div className="absolute mt-0 top-full left-0 bg-white shadow-lg rounded-sm z-20">
                          {menuItem.subItems.map((subItem) => (

                            <Link key={subItem.id} href={subItem.path} className='block px-6 py-2 text-gray-800 hover:bg-gray-200'>{subItem.name}</Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link href={menuItem.path} className='text-white text-xl hover:white hover:font-bold rounded-lg p-1.5 font-serif'>
                      {menuItem.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className='sm:hidden flex items-center'>
            <button className='inline-flex items-center justify-center p-2 rounded-sm text-white sm:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              onClick={toggleNavbar}>
              {<TfiAlignJustify />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='sm:hidden bg-navy mt-2 relative z-20'>
          <div className='ml-4 flex flex-col space-y-4'>
            {menuList.map((menuItem) => (
              <div key={menuItem.id}>
                {menuItem.id === 3 ? (
                  <div className={`relative ${activeMenu === menuItem.id && 'block'} `}>
                    <div className="flex items-center justify-between hover:bg-gray-100 rounded-lg text-white hover:text-blue-700 hover:font-bold p-2">

                      <span>{menuItem.name}</span>
                      <button onClick={() => toggleMenu(menuItem.id)}>
                        <span className='justify-end'>{activeMenu === menuItem.id ? <BsX /> : <BsChevronDown />}</span>
                      </button>
                    </div>
                    {activeMenu === menuItem.id && (
                      <div className="mt-2 bg-white shadow-lg rounded-md">
                        {menuItem.subItems.map((subItem, index) => (
                          <Link key={index} href={subItem.path} className='block px-4 py-2 text-gray-800 hover:bg-gray-200 '>{subItem.name}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={menuItem.path} className='block hover:bg-gray-100  rounded-lg text-white hover:text-blue-700  hover:font-bold  p-2'>
                    {menuItem.name}
                  </Link>
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
