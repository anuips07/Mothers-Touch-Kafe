import React, { useState } from "react";
import "./Navbar.css";
import { Link, redirect, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import HomeIcon from "../../../images/navbar/home-icon.png";
import SearchIcon from "../../../images/navbar/search-icon.png";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("home");

  const redirectPage = (path) => {
    navigate(`/${path}`);
  };

  useEffect(() => {
    setActiveNav(location.pathname.split("/")[1].toLowerCase());
  }, [location]);
  return (
    <div className="nav-main-cntr">
      <div className="nav-cntr">
        <div className="nav-list">
          <div className="nav-cta nav-cta-l">
            <img src={HomeIcon} onClick={() => redirectPage("home")} />
          </div>

          <ul className="nav-left">
            <li>
              <Link to={"History"}>
                <p className={activeNav === "history" ? "active-nav" : ""}> History </p>
              </Link>
            </li>
            <li>
              <Link to={"Menu"}>
                <p className={activeNav === "menu" ? "active-nav" : ""}> Menu </p>
              </Link>
            </li>
          </ul>
        </div>

        <div className="nav-logo" onClick={() => redirectPage("home")}>
          <img src="./logo192.png" />
        </div>

        <div className="nav-list">
          <div className="nav-cta nav-cta-r">
            <img src={HomeIcon} />
            <img src={SearchIcon} />
          </div>

          <ul className="nav-right">
            <li>
              <Link to={"Menu"}>
                <p className={activeNav === "services" ? "active-nav" : ""}> Services </p>
              </Link>
            </li>
            <li>
              <Link to={"Menu"}>
                <p className={activeNav === "contact" ? "active-nav" : ""}> Contact </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
