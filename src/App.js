import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Common/Navbar/Navbar";
import Contact from "./components/Common/Contact/Contact";
import MtFooter from "./components/Common/MtFooter/MtFooter";

export default function App() {
  const [defaultLoader, setDefaultLoader] = useState(true);
  const contactRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setDefaultLoader(false);
    }, [1500]);
  }, []);

  return (
    <div className="main-cntr">
      {defaultLoader ? (
        <div className="default-loader">
          <img src="./logo192.png" alt="logo loader" />
        </div>
      ) : (
        <>
          <Navbar contactRef={contactRef} />

          <Outlet />

          <Contact ref={contactRef} />

          <MtFooter />
        </>
      )}
    </div>
  );
}
