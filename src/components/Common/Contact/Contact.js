import React, { forwardRef } from "react";
import "./Contact.css";

const Contact = forwardRef((props, ref) => {
  return (
    <div className="contact-cntr" ref={ref}>
      <div className="contact-l contact-panel">
        <div className="social-cta">
          <div className="social-b-border">
            <img src="/images/contact/fb.png" style={{ height: "30px", width: "auto" }} alt="fb" />
          </div>

          <div className="social-b-border">
            <img src="/images/contact/insta.png" alt="insta" />
          </div>

          <div className="social-b-border">
            <img src="/images/contact/whatsapp.png" alt="whatsapp" />
          </div>
        </div>

        <img className="map-img" src="/images/contact/map.png" alt="map" />
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
});

export default Contact;
