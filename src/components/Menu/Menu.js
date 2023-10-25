import React, { useEffect, useState } from "react";
import "./Menu.css";
import MenuHeader from "../../images/menu/Menu-Header.png";
import BeverageIcon from "../../images/menu/Vector-Smart Object.png";

export default function Menu() {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [openMenu]);
  return (
    <section>
      <img src={MenuHeader} className="menu-header" />

      <div className="menu-cntr">
        <div className="menu-title menu-title-l">
          <h1>Beverages</h1>
          <img src={BeverageIcon} />
        </div>

        <div className="menu-list">
          <ul>
            <li
              onClick={() => {
                setOpenMenu(true);
              }}>
              Juices
            </li>
            <li>Milkshakes</li>
            <li>Health juice</li>
            <li>Protein shake</li>
            <li>Lassi</li>
          </ul>
        </div>

        <div className="btm-r-border"></div>
      </div>

      <div className="menu-cntr">
        <div className="menu-list">
          <ul>
            <li>Cereals with fruits and honey</li>
            <li>Egg to order omelettes</li>
            <li>Maggie (likely referring to Maggi noodles)</li>
            <li>Breads and spreads</li>
          </ul>
        </div>

        <div className="menu-title menu-title-r">
          <h1>Breakfast Items</h1>
          <img src={BeverageIcon} />
        </div>

        <div className="btm-l-border"></div>
      </div>

      <div className="menu-cntr">
        <div className="menu-title menu-title-l">
          <h1>Main Courses</h1>
          <img src={BeverageIcon} />
        </div>

        <div className="menu-list">
          <ul>
            <li>Oriental wok (Brown Rice fried rice)</li>
            <li>Italian Delight pasta with choice of sauce</li>
            <li>Rolls</li>
            <li>Tibetan momos</li>
          </ul>
        </div>

        <div className="btm-r-border"></div>
      </div>

      <div className="menu-cntr">
        <div className="menu-list">
          <ul>
            <li>Cream & frothed (possibly coffee or hot beverages)</li>
            <li>Soups</li>
            <li>Saldz weigh your salad</li>
            <li>Variety of wholesome salads from the salad bar</li>
          </ul>
        </div>

        <div className="menu-title menu-title-r">
          <h1>Lighter Fare</h1>
          <img src={BeverageIcon} />
        </div>

        <div className="btm-l-border"></div>
      </div>

      <div className="menu-cntr">
        <div className="menu-title menu-title-l">
          <h1>Snacks and Fast Food</h1>
          <img src={BeverageIcon} />
        </div>

        <div className="menu-list">
          <ul>
            <li>Crunchy burgers</li>
            <li>Chats (snack-like items)</li>
          </ul>
        </div>
      </div>

      {openMenu && (
        <div className="menu-modal">
          <div className="menu-modal-panel">
            <p className="close-menu-modal" onClick={() => setOpenMenu(false)}>
              ✖︎
            </p>

            <ul>
              <li>Watermelon Juice</li>
              <li>Grape Juice</li>
              <li>Sweet Lime Juice</li>
              <li>Pineapple Juice</li>
              <li>Orange Juice</li>
              <li>Gooseberry Juice</li>
              <li>Butter Juice</li>
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
