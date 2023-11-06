import React, { useState } from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import Testimonials from "../Common/Testimonials/Testimonials";
import GReview from "../../g_review.png";
import { ImageShimmer } from "../Common/ImageShimmer/ImageShimmer";

export default function Home() {
  const navigate = useNavigate();
  const [homeBannerLoad, setHomeBannerLoad] = useState(true);
  const [menuBannerLoad, setMenuBannerLoad] = useState(true);

  const handleMenu = () => {
    window.scrollTo(0, 0);
    navigate("/menu");
  };
  return (
    <section className="home-cntr">
      {homeBannerLoad && <ImageShimmer />}

      <img className="taste-home" src="/images/home/TasteHome.png" alt="home banner" onLoad={() => setHomeBannerLoad(false)} />

      <div className="about-cntr">
        <h1>About us</h1>
        <p>Mother's Touch Kafe, a haven of culinary delights, stands as a testament to the profound connection between nourishment and flourishing. With our poignant tagline "Nourish to Flourish," we transcend the conventional notions of food, infusing every creation with the nurturing essence of a mother's care. Since our inception in 2020 within the vibrant city of Bangalore, we have blossomed into a global epicenter of delectable experiences, bridging palates and hearts through our newly launched website.</p>
      </div>

      {menuBannerLoad && <ImageShimmer />}
      <img className="menu-home" onClick={handleMenu} src="/images/home/Menu.png" alt="menu banner" onLoad={() => setMenuBannerLoad(false)} />

      <Testimonials />

      <Link to="#" onClick={(e) => window.open("https://g.page/r/CWCR9hs9A-45EAI/review", "_blank", "noreferrer")}>
        <div className="g-rev-cntr">
          <img src={GReview} alt="Google Review Icon" />
        </div>
      </Link>
    </section>
  );
}
