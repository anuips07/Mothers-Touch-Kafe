import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Common/Navbar/Navbar";
import "./style.css";

export default function App() {
  return (
    <div className="main-cntr">
      <Navbar />
      <Outlet />
    </div>
  );
}
