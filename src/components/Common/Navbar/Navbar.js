import React, { useState } from "react";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Navbar({ contactRef }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("/");

  const redirectPage = (path) => {
    navigate(`/${path}`);
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setActiveNav(location.pathname.split("/")[1].toLowerCase());
  }, [location]);
  return (
    <div className="nav-main-cntr">
      <div className="nav-cntr">
        <div className="nav-list">
          <div className="nav-cta nav-cta-l">
            <img src="/images/navbar/home-icon.png" onClick={() => redirectPage("")} />
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

        <div className="nav-logo" onClick={() => redirectPage("")}>
          <img src="./logo192.png" />
        </div>

        <div className="nav-list">
          <div className="nav-cta nav-cta-r">
            <img src="/images/navbar/question.png" style={{ width: "15px" }} />
            <img src="/images/navbar/search-icon.png" />
          </div>

          <ul className="nav-right">
            <li>
              <Link to={"Menu"}>
                <p className={activeNav === "services" ? "active-nav" : ""}> Services </p>
              </Link>
            </li>
            <li onClick={scrollToContact}>
              <a href="#">
                <p className={activeNav === "contact" ? "active-nav" : ""}> Contact </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
