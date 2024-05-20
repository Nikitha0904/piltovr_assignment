"use client"
import React, { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false); 

  const menuList = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About Us", path: "/about" },
    {
      id: 3,
      name: "Departments",
    },
    { id: 4, name: "Contact Us", path: "/contact" },
    { id: 5, name: "Branches", path: "/branches" },
    { id: 6, name: "Login", path: "/login" },
    { id: 7, name: "Signup", path: "/signup" },
    { id: 8, name: "Students", path: "/students" },
  ];

  return (
    <NavigationMenu className="fixed w-full mt-0">
      <div className="flex items-center justify-between mx-auto px-4 sm:px-6 lg:px-8 bg-navy w-screen h-20">
        <div className="flex items-center">
          <img src="/logo.png" alt="logo" style={{ width: "60px", height: "auto" }} className="mr-4" />
          <div>
            <h2 className="hidden xl:block text-white text-md font-bold">Shri Vishnu Engineering College For Women</h2>
            <h3 className="hidden xl:block text-white text-md">Bhimavaram, Andhra Pradesh</h3>
          </div>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setShowMenu(!showMenu)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          {showMenu && (
            <div className="flex flex-col items-start bg-navy text-white absolute top-20 left-0 w-full pl-4">
              
              {menuList.map((menuItem) => (
                <NavigationMenuItem key={menuItem.id} className="mb-2 list-none">
                  {menuItem.name === "Departments" ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="text-white">{menuItem.name}</button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Computer Science</DropdownMenuItem>
                        <DropdownMenuItem>Electrical Engineering</DropdownMenuItem>
                        <DropdownMenuItem>Mechanical Engineering</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <NavigationMenuLink href={menuItem.path}>{menuItem.name}</NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </div>
          )}
        </div>
        <div className="hidden lg:flex lg:items-center text-white">
          <NavigationMenuList className="list-none flex flex-col lg:flex-row">
            {menuList.map((menuItem) => (
              <NavigationMenuItem key={menuItem.id}>
                {menuItem.name === "Departments" ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="text-white">{menuItem.name}</button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Computer Science</DropdownMenuItem>
                      <DropdownMenuItem>Electrical Engineering</DropdownMenuItem>
                      <DropdownMenuItem>Mechanical Engineering</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <NavigationMenuLink href={menuItem.path}>{menuItem.name}</NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </div>
      </div>
    </NavigationMenu>
  );
};

export default Navbar;
