import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-cntr">
      <div className="contact-l contact-panel">
        <div className="social-cta">
          <div className="social-b-border">
            <img src="/images/contact/fb.png" style={{ height: "30px", width: "auto" }} />
          </div>

          <div className="social-b-border">
            <img src="/images/contact/insta.png" />
          </div>

          <div className="social-b-border">
            <img src="/images/contact/whatsapp.png" />
          </div>
        </div>

        <img className="map-img" src="/images/contact/map.png" />
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
