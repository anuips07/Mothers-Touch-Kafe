import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Common/Navbar/Navbar";
import Contact from "./components/Common/Contact/Contact";
import "./style.css";
import MtFooter from "./components/Common/MtFooter/MtFooter";

export default function App() {
  return (
    <div className="main-cntr">
      <Navbar />

      <Outlet />

      <Contact />

      <MtFooter />
    </div>
  );
}
