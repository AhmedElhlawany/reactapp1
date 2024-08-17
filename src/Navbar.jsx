import { Link } from "react-router-dom";
import React from 'react';
import { useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
  const navList = (
    <ul className="mt-2 mb-4 flex items-center flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-center">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <Link to="About" className="flex items-center">
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <Link to="Portfolio" className="flex items-center">
        Portfolio
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <Link to="Contact" className="flex items-center">
        Contact
        </Link>
      </Typography>
      
    </ul>
  );

  return (
    <div className="bg-indigo-900">
      <Navbar className="fixed top-0 opacity-100 z-50 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-indigo-900">
        <div className="flex items-center justify-between text-white w-4/5 m-auto">
          <Link to="" className="flex items-center">
            <span className=" text-white text-4xl font-extrabold">Start Framework</span>
          </Link>
          <div className="flex items-center gap-4 text-white">
            <div className="mr-4 hidden lg:block"><ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 "> <li>
              <Link to="About" className="block py-2 px-3 text-2xl focus:bg-cyan-400 rounded-md ">About</Link>
            </li>
              <li>
                <Link to="Portfolio" className="block py-2 px-3 text-2xl focus:bg-cyan-400 rounded-md ">Portfoio</Link>
              </li>

              <li>
                <Link to="Contact" className="block py-2 px-3 text-2xl focus:bg-cyan-400 rounded-md ">Contact</Link>
              </li></ul></div>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-center m-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6 text-center m-auto"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          
        </MobileNav>
      </Navbar>

    </div>
  );

 
}