import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <div className="bg-[rgba(247,111,113,0.07)] h-screen">
      <Navbar/>
      <Outlet />
    </div>
  );
};

export default Main;
