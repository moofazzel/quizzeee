import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../logo.svg";
import '../components/Navbar.css'

const Navbar = () => {
  return (
    <header className=" bg-white text-[#f76f72] shadow-sm pb-4 pt-2">
      <div className=" md:w-4/5 mx-auto flex  justify-between h-16">
        <Link to={"/"}>
          <img className="w-60 logo" src={logo} alt="" />
        </Link>
        <ul className="space-x-6 flex items-center text-xl font-semibold">
          <li className="flex leading-9  hover:border-b-4 hover:border-red-400">
            <NavLink
              to={"home"}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li className="flex leading-9  hover:border-b-4 hover:border-red-400">
            <NavLink to={"chart"}>
              Chart
            </NavLink>
          </li>
          <li className="flex leading-9  hover:border-b-4 hover:border-red-400">
            <NavLink to={"blog"}>
              Blog
            </NavLink>
          </li>
        
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
