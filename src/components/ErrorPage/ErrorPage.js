import React from "react";
import "./ErrorPage.css";
import LogoFull from "../../MTF-Text-Primary-Logo_White.svg";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="error-main-cntr">
      <div className="error-cntr">
        <img src={LogoFull} alt="logo" />
        <h1> 404 Page Not Found</h1>
        <button onClick={() => navigate("/")}>Go to Homepage</button>
      </div>
    </div>
  );
}
