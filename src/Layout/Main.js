import React from "react";
import { Outlet } from "react-router-dom";
import { Nav } from "../components/Nav";

const Main = () => {
  return (
    <div className="bg-[rgba(247,111,113,0.07)] h-full">
      <Nav/>
      <Outlet />
    </div>
  );
};

export default Main;
