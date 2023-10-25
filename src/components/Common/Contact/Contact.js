import React from "react";
import "./Contact.css";
import Map from "../../../images/contact/map.png";
import Fb from "../../../images/contact/fb.png";
import Insta from "../../../images/contact/insta.png";
import Whatsapp from "../../../images/contact/whatsapp.png";

export default function Contact() {
  return (
    <div className="contact-cntr">
      <div className="contact-l contact-panel">
        <div className="social-cta">
          <img src={Fb} />
          <img src={Insta} />
          <img src={Whatsapp} />
        </div>

        <img className="map-img" src={Map} />
      </div>

      <div className="contact-r contact-panel">
        <h1>Contact</h1>

        <div className="contact-info">
          <p>Ph: 9980766522</p>
          <p>Email: info@motherstouch.com</p>
          <p>www.motherstouch.co.in</p>
          <p>No. 106/1, Thamarai Kannan Road, 1St Floor, Near Adarsh Theater, Bengaluru, Karnataka 560008</p>
        </div>
      </div>
    </div>
  );
}
