import React from "react";
import "./ErrorPage.css";
import { useNavigate } from "react-router-dom";
import LogoLoader from "../../logo.png";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="error-main-cntr">
      <div className="error-cntr">
        <div className="loader-img-cntr">
          <img src={LogoLoader} alt="logo loader" />
        </div>
        <h1> 404 Page Not Found</h1>
        <button onClick={() => navigate("/")}>Go to Homepage</button>
      </div>
    </div>
  );
}
