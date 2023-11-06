import React, { useState } from "react";
import "./History.css";
import { ImageShimmer } from "../Common/ImageShimmer/ImageShimmer";

export default function History() {
  const [homeBannerLoad, setHomeBannerLoad] = useState(true);
  return (
    <section>
      {homeBannerLoad && <ImageShimmer />}
      <img src="/images/history/History-Header.jpg" className="menu-header" alt="history banner" onLoad={() => setHomeBannerLoad(false)} />

      <div className="history-cntr">
        <div className="history-img">
          <img src="/images/history/icon-1.svg" alt="history icon 1" />
        </div>

        <div className="history-info">
          <p>Mother's Touch Kafe commenced its journey with a heartfelt aspiration: to radiate love and affection through the medium of culinary artistry. Our story began in the year 2020 amidst the bustling streets of Bangalore, igniting an odyssey that has led us to touch the lives and palates of countless individuals. What once started as a modest venture has now matured into a culinary oasis, embraced by a community of over 150 patrons who have found solace in our offerings.</p>
        </div>
      </div>

      <div className="history-cntr">
        <div className="history-img resp-history-img">
          <img src="/images/history/icon-2.svg" alt="history icon 2" />
        </div>

        <div className="history-info">
          <p>Mother's Touch Kafe is a renowned establishment known for its exceptional corporate services, catering expertise, and cake orders. With an impressive track record of six years, they have successfully catered to esteemed MNCs including Concentric for two years, JPMC (JP Morgan) for two years, and Northern Trust for one year. Additionally, they have collaborated with WeWork for six months, providing top-notch catering services during their corporate events. The Kafe also features a Live Kitchen, Tech Shop, Juice Center, and a convenient One-Stop Beverages counter for tea and coffee enthusiasts. Their dedication to quality and customer satisfaction sets them apart in the industry.</p>
        </div>

        <div className="history-img resp-history-img2">
          <img src="/images/history/icon-2.svg" alt="history icon 2" />
        </div>
      </div>

      <div className="history-cntr">
        <div className="history-img">
          <img src="/images/history/icon-3.svg" alt="history icon 3" />
        </div>

        <div className="history-info">
          <p>Beyond numbers, it's the shared moments of joy that define our legacy. With a personal touch, we've had the privilege of serving and sharing in the happiness of over 2000 patrons, etching unforgettable memories. Notably, our cakes have graced the tables of 100 discerning customers, infusing sweetness into their special moments. From intimate gatherings to opulent wedding affairs, Mother's Touch Kafe has emerged as the go-to choice for those seeking to weave flavor into their cherished events.</p>
        </div>
      </div>
    </section>
  );
}
