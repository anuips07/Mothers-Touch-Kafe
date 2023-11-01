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

        <img className="map-img" src="/images/contact/map.png" alt="map" onClick={() => window.open("https://www.google.com/maps/place/12%C2%B059'49.2%22N+77%C2%B037'52.4%22E/@12.9973242,77.62664,16.19z/data=!4m4!3m3!8m2!3d12.9969915!4d77.6312208?hl=en&entry=ttu")} />
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
