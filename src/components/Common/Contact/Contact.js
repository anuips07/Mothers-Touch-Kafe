import React, { forwardRef } from "react";
import "./Contact.css";

const Contact = forwardRef((props, ref) => {
  const { chatWhatsapp } = props;
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

          <div className="social-b-border" onClick={chatWhatsapp}>
            <img src="/images/contact/whatsapp.png" alt="whatsapp" />
          </div>
        </div>

        <img className="map-img" src="/images/contact/map.png" alt="map" />
      </div>

      <div className="contact-r contact-panel">
        <h1>Contact</h1>

        <div className="contact-info">
          <p>Ph: +91-9742837104</p>
          <p>Email: info@motherstouch.com</p>
          <p>www.motherstouchkafe.com</p>
          <p>#21, K R Palya, Cox Town, Jeevanahalli, Bangalore 560005</p>
        </div>
      </div>
    </div>
  );
});

export default Contact;
