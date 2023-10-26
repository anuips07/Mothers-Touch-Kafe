import React, { useEffect, useState } from "react";
import "./Menu.css";
import { MenuList } from "./MenuList";

export default function Menu() {
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleMenu = (menu) => {
    if (!openMenu) {
      setSelectedMenu(menu);
    } else {
      setSelectedMenu(null);
    }
    setOpenMenu((prev) => !prev);
  };

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [openMenu]);
  return (
    <section>
      <img src="/images/menu/Menu-Header.png" className="menu-header" />

      {MenuList.map((list, index) => {
        return (
          <div key={list.menuType + index} className="menu-cntr">
            {(index + 1) % 2 !== 0 && (
              <div className="menu-title menu-title-l">
                <h1>{list.menuType}</h1>
                <img src={list.menuImage} />
              </div>
            )}

            <div className="menu-list">
              <ul>
                {list.mainMenu.map((menuList, indx) => {
                  return (
                    <li key={menuList.mainMenuName + indx} onClick={() => handleMenu(menuList)}>
                      {menuList.mainMenuName}
                    </li>
                  );
                })}
              </ul>
            </div>

            {(index + 1) % 2 === 0 && (
              <div className="menu-title menu-title-r">
                <h1>{list.menuType}</h1>
                <img src={list.menuImage} />
              </div>
            )}

            {index < MenuList.length - 1 && <div className={(index + 1) % 2 === 0 ? "menu-title btm-l-border" : "menu-title btm-r-border"}></div>}
          </div>
        );
      })}

      {/* <div className="menu-cntr">
        <div className="menu-title menu-title-l">
          <h1>Beverages</h1>
          <img src="/images/menu/Vector-Smart Object.png" />
        </div>

        <div className="menu-list">
          <ul>
            <li>Juices</li>
            <li>Milkshakes</li>
            <li>Health juice</li>
            <li>Protein shake</li>
            <li>Lassi</li>

            {MenuList.map((menu, index) => {
              return menu.menuType === "Breakfast" && <li>{}</li>;
            })}
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
          <img src="/images/menu/Vector-Smart Object.png" />
        </div>

        <div className="btm-l-border"></div>
      </div>

      <div className="menu-cntr">
        <div className="menu-title menu-title-l">
          <h1>Main Courses</h1>
          <img src="/images/menu/Vector-Smart Object.png" />
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
          <img src="/images/menu/Vector-Smart Object.png" />
        </div>

        <div className="btm-l-border"></div>
      </div>

      <div className="menu-cntr">
        <div className="menu-title menu-title-l">
          <h1>Snacks and Fast Food</h1>
          <img src="/images/menu/Vector-Smart Object.png" />
        </div>

        <div className="menu-list">
          <ul>
            <li>Crunchy burgers</li>
            <li>Chats (snack-like items)</li>
          </ul>
        </div>
      </div> */}

      {openMenu && (
        <div className="menu-modal">
          <div className="menu-modal-panel">
            <div className="menu-modal-header">
              <h3>{selectedMenu.mainMenuName}</h3>
              <p className="close-menu-modal" onClick={() => setOpenMenu(false)}>
                ✖︎
              </p>
            </div>

            <div className="submenu-cntr">
              <ul>
                {selectedMenu.subMenu.map((subMenuList, index) => {
                  return <li key={subMenuList + index}>{subMenuList}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
