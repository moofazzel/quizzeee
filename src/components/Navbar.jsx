import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../logo.svg";
import '../components/Navbar.css'

const Navbar = () => {
  return (
    <header className=" bg-white text-[#f76f72] shadow-sm pb-4 pt-2">
      <div className=" md:w-4/5 mx-auto  flex justify-between h-16">
        <Link to={"/"}>
          <img className="w-60 logo" src={logo} alt="" />
        </Link>
        <ul className="hidden space-x-3 md:flex items-center">
          <li className="flex  hover:border-b-4 hover:border-red-400">
            <NavLink
              to={"home"}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li className="flex  hover:border-b-4 hover:border-red-400">
            <NavLink to={"statistics"} className="">
              Statistics
            </NavLink>
          </li>
          <li className="flex  hover:border-b-4 hover:border-red-400">
            <NavLink to={"blog"} className="">
              Blog
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
