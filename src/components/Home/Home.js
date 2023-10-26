import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Testimonials from "../Common/Testimonials/Testimonials";

export default function Home() {
  const navigate = useNavigate();
  return (
    <section className="home-cntr">
      <img src="/images/home/TasteHome.png" className="taste-home" />

      <div className="about-cntr">
        <h1>About us</h1>
        <p>Mother's Touch Kafe, a haven of culinary delights, stands as a testament to the profound connection between nourishment and flourishing. With our poignant tagline "Nourish to Flourish," we transcend the conventional notions of food, infusing every creation with the nurturing essence of a mother's care. Since our inception in 2020 within the vibrant city of Bangalore, we have blossomed into a global epicenter of delectable experiences, bridging palates and hearts through our newly launched website.</p>
      </div>

      <img src="/images/home/Menu.png" className="menu-home" onClick={() => navigate("/menu")} />

      <Testimonials />
    </section>
  );
}
