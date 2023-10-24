import React from "react";
import "./Home.css";
import TasteHome from "../../images/home/TasteHome.png";

export default function Home() {
  return (
    <section className="home-cntr">
      <img src={TasteHome} className="taste-home" />
    </section>
  );
}
