import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Common/Navbar/Navbar";
import Contact from "./components/Common/Contact/Contact";
import MtFooter from "./components/Common/MtFooter/MtFooter";
import LogoLoader from "./logo.png";
import CafeServices from "./components/Common/CafeServices/CafeServices";

export default function App() {
  const [defaultLoader, setDefaultLoader] = useState(true);
  const contactRef = useRef(null);
  const [openService, setOpenService] = useState(false);
  const [serviceInfo, setServiceInfo] = useState(null);

  const chatWhatsapp = () => {
    window.open("https://wa.me/918088670687?text=Hi", "_blank", "noreferrer");
  };

  useEffect(() => {
    setTimeout(() => {
      setDefaultLoader(false);
    }, [1500]);
  }, []);

  return (
    <div className="main-cntr">
      {defaultLoader ? (
        <div className="default-loader">
          <div className="loader-img-cntr">
            <img src={LogoLoader} alt="logo loader" />
          </div>
        </div>
      ) : (
        <>
          <Navbar contactRef={contactRef} setOpenService={setOpenService} setServiceInfo={setServiceInfo} />

          <Outlet />

          <Contact ref={contactRef} chatWhatsapp={chatWhatsapp} />

          <MtFooter />

          {openService && <CafeServices serviceInfo={serviceInfo} setOpenService={setOpenService} chatWhatsapp={chatWhatsapp} />}
        </>
      )}
    </div>
  );
}
