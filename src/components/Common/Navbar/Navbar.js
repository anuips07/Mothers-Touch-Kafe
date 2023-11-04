import React, { useRef, useState } from "react";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LogoFull from "../../../logo.jpg";
// import Logo from "../../../MTF-Icon-Primary-Logo.svg";

export default function Navbar({ contactRef, setOpenService, setServiceInfo }) {
  const location = useLocation();
  const navigate = useNavigate();
  const serviceRef = useRef(null);
  const [activeNav, setActiveNav] = useState("/");
  const [showMenu, setShowMenu] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showRespServices, setShowRespServices] = useState(false);

  const redirectPage = (path) => {
    window.scrollTo(0, 0);
    if (showMenu) {
      handleMenu();
    }
    navigate(`/${path}`);
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    if (showMenu) {
      handleMenu();
    }
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleMenu = () => {
    if (showMenu) {
      document.body.style.overflow = "";
      setShowRespServices(false);
    } else {
      document.body.style.overflow = "hidden";
    }
    setShowMenu((prev) => !prev);
  };

  const handleServices = () => {
    setShowServices((prev) => !prev);
  };

  const handleCakeService = () => {
    handleServices();
    if (showMenu) {
      handleMenu();
    }
    navigate("/Menu/Cakes");
  };

  const showServiceModal = (info) => {
    let tempObj = {};

    if (info === "Corporate") {
      tempObj = {
        title: "Corporate Services",
        info: "Tech Shop,Live Kitchen,Tea & Coffee Counter,Juice Counter,Bakery Stall,Food service for Corporate Events",
      };
    } else if (info === "Catering") {
      tempObj = {
        title: "Catering Services",
        info: null,
      };
    } else if (info === "One-Stop") {
      tempObj = {
        title: "One-Stop Beverage",
        info: null,
      };
    }
    setServiceInfo(tempObj);
    if (showMenu) {
      handleMenu();
    }
    setOpenService(true);
    handleServices();
  };

  useEffect(() => {
    setActiveNav(location.pathname.split("/")[1].toLowerCase());
  }, [location]);

  useEffect(() => {
    const clickOutside = (e) => {
      if (serviceRef.current && !serviceRef.current.contains(e.target)) {
        setShowServices(false);
      }
    };

    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("click", clickOutside);
    };
  });
  return (
    <div className="nav-main-cntr">
      <div className="nav-cntr">
        <svg className="menu-hamburger" onClick={handleMenu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="hamburger-menu">
          <path d="M26,3H6A3,3,0,0,0,3,6V26a3,3,0,0,0,3,3H26a3,3,0,0,0,3-3V6A3,3,0,0,0,26,3ZM21,21H11a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Zm0-4H11a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Zm0-4H11a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z" data-name="hamburger menu"></path>
        </svg>

        <div className="nav-list">
          <div className="nav-cta nav-cta-l">
            <img src="/images/navbar/home-icon.png" onClick={() => redirectPage("")} alt="home-icon" />
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
          <img src={LogoFull} alt="logo" />
          <img className="logo-bg" src="/images/navbar/LogoTag.png" alt="logo-bg" />
        </div>

        <div className="nav-list">
          <div className="nav-cta nav-cta-r">
            <img src="/images/navbar/question.png" style={{ width: "15px" }} alt="question-icon" />
            <img src="/images/navbar/search-icon.png" alt="search-icon" />
          </div>

          <ul className="nav-right">
            <li ref={serviceRef}>
              <div id="services" onClick={handleServices}>
                <p className={activeNav === "services" ? "active-nav" : ""}> Services </p>
              </div>

              {showServices && (
                <div className="services-cntr">
                  <ul>
                    <li onClick={() => showServiceModal("Corporate")}>Corporate Services</li>
                    <li onClick={() => showServiceModal("Catering")}>Catering Services</li>
                    <li onClick={handleCakeService}>Cakes & Treats</li>
                    <li onClick={() => showServiceModal("One-Stop")}>One-Stop Beverage</li>
                  </ul>
                </div>
              )}
            </li>
            <li onClick={scrollToContact}>
              <div className="contact-cta">
                <p className={activeNav === "contact" ? "active-nav" : ""}> Contact </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {showMenu && (
        <div className="resp-menu">
          <div className="resp-menu-cntr">
            <div>
              <svg className="close-resp-menu" onClick={handleMenu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.41 331.18" id="close">
                <path d="M486.43,98.09,423.1,27.72A83.85,83.85,0,0,0,360.86,0H83.74A83.83,83.83,0,0,0,0,83.74v163.7a83.84,83.84,0,0,0,83.74,83.74H360.86a83.89,83.89,0,0,0,62.24-27.72l63.33-70.37A100.7,100.7,0,0,0,486.43,98.09ZM288.91,222.52,267.7,243.74l-53.28-53.28-53.28,53.28-21.22-21.22,53.29-53.28L139.92,116l21.22-21.21L214.42,148,267.7,94.75,288.91,116l-53.28,53.28Z" data-name="Layer 2"></path>
              </svg>

              <ul>
                <li className={activeNav === "" ? "active-nav" : ""} onClick={() => redirectPage("")}>
                  <p> Home </p>
                </li>
                <li className={activeNav === "history" ? "active-nav" : ""} onClick={() => redirectPage("History")}>
                  <p> History </p>
                </li>
                <li className={activeNav === "menu" ? "active-nav" : ""} onClick={() => redirectPage("Menu")}>
                  <p> Menu </p>
                </li>
                <li>
                  <div
                    onClick={() => {
                      setShowRespServices((prev) => !prev);
                    }}>
                    <p className={activeNav === "services" ? "active-nav" : ""}> Services </p>
                  </div>

                  {showRespServices && (
                    <div className="resp-serv-menu">
                      <ul>
                        <li onClick={() => showServiceModal("Corporate")}>Corporate Services</li>
                        <li onClick={() => showServiceModal("Catering")}>Catering Services</li>
                        <li onClick={handleCakeService}>Cakes & Treats</li>
                        <li onClick={() => showServiceModal("One-Stop")}>One-Stop Beverage</li>
                      </ul>
                    </div>
                  )}
                </li>
                <li className={activeNav === "contact" ? "active-nav" : ""} onClick={scrollToContact}>
                  <p> Contact </p>
                </li>
              </ul>
            </div>

            <div className="resp-nav-logo" onClick={() => redirectPage("")}>
              <img src={LogoFull} alt="logo" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
