import React, { useEffect, useState } from "react";
import "./Menu.css";
import { MenuList } from "./MenuList";
import { useLocation } from "react-router-dom";

export default function Menu({ openCakes }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

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

  useEffect(() => {
    if (queryParams.get("menuSelect") === "Cakes") {
      const cakeMainMenuIndx = MenuList.findIndex((menu) => menu.menuType === "Cakes & Treats");
      if (cakeMainMenuIndx > -1) {
        const cakeMenuIndx = MenuList[cakeMainMenuIndx].mainMenu.findIndex((menu) => menu.mainMenuName === "Cakes");
        if (cakeMenuIndx > -1) {
          setSelectedMenu(MenuList[cakeMainMenuIndx].mainMenu[cakeMenuIndx]);
          setOpenMenu(true);
        }
      }
    }
  }, [location]);
  return (
    <section>
      <img src="/images/menu/Menu-Banner.svg" className="menu-header" alt="menu banner" />

      {MenuList.map((list, index) => {
        return (
          <div key={list.menuType + index} className="menu-cntr">
            <img className="resp-menu-img" src={list.menuImage} alt="menu image" />

            {(index + 1) % 2 !== 0 && (
              <div className="menu-title menu-title-l">
                <h1>{list.menuType}</h1>
                <img src={list.menuImage} alt="menu image" />
              </div>
            )}

            <h1 className="resp-title">{list.menuType}</h1>

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
                <img src={list.menuImage} alt="menu image" />
              </div>
            )}

            {index < MenuList.length - 1 && <div className={(index + 1) % 2 === 0 ? "menu-title btm-l-border" : "menu-title btm-r-border"}></div>}
          </div>
        );
      })}

      {openMenu && (
        <div className="modal-cntr">
          <div className="menu-modal-panel">
            <div className="menu-modal-header">
              <h3>{selectedMenu.mainMenuName}</h3>
              <p className="close-menu-modal" onClick={() => setOpenMenu(false)}>
                ✖︎
              </p>

              <div className="menu-modal-icon">
                <img src="/images/menu/Beverages.svg" alt="menu-modal-icon" />
              </div>
            </div>

            <div className="submenu-cntr">
              <ul>
                {selectedMenu.subMenu.map((subMenuList, index) => {
                  return (
                    <li key={subMenuList + index}>
                      <p>✦</p>
                      <p>{subMenuList}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
