import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../logo.svg";

const Navbar = () => {
  return (
    <header className=" bg-white text-[#f76f72] shadow-sm py-3">
      <div className=" md:w-4/5 mx-auto  flex justify-between h-16 mx-auto">
        <NavLink to={'/'} className="flex items-center p-2">
          <img className="w-60 logo" src={logo} alt="" />
        </NavLink>
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <NavLink to={'home'} className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:border-b-4 hover:border-red-400">
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink to={'quiz'} className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:border-b-4 hover:border-red-400">
              Quiz
            </NavLink>
          </li>
          <li className="flex">
            <NavLink to={'statistics'} className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:border-b-4 hover:border-red-400">
              Statistics
            </NavLink>
          </li>
          <li className="flex">
            <NavLink className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:border-b-4 hover:border-red-400">
              Blogs
            </NavLink>
          </li>
        </ul>
        <button className="flex justify-end p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
