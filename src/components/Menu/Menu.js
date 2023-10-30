import React, { useEffect, useState } from "react";
import "./Menu.css";
import { MenuList } from "./MenuList";
import { useParams } from "react-router-dom";
import ProgressiveImage from "react-progressive-graceful-image";

export default function Menu({ openCakes }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const { menuSelect } = useParams();

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
    if (menuSelect === "Cakes") {
      const cakeMainMenuIndx = MenuList.findIndex((menu) => menu.menuType === "Cakes & Treats");
      if (cakeMainMenuIndx > -1) {
        const cakeMenuIndx = MenuList[cakeMainMenuIndx].mainMenu.findIndex((menu) => menu.mainMenuName === "Cakes");
        if (cakeMenuIndx > -1) {
          setSelectedMenu(MenuList[cakeMainMenuIndx].mainMenu[cakeMenuIndx]);
          setOpenMenu(true);
        }
      }
    }
  }, [menuSelect]);
  return (
    <section>
      <ProgressiveImage delay={3000} src="/images/menu/Menu-Banner.svg" placeholder="/images/menu/Menu-Banner-small.png">
        {(src) => <img className="menu-header" src={src} alt="menu banner" />}
      </ProgressiveImage>

      {MenuList.map((list, index) => {
        return (
          <div key={list.menuType + index} className="menu-cntr">
            <img className="resp-menu-img" src={list.menuImage} alt="menu resp icon" />

            {(index + 1) % 2 !== 0 && (
              <div className="menu-title menu-title-l">
                <h1>{list.menuType}</h1>
                <img src={list.menuImage} alt="menu left icon" />
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
                <img src={list.menuImage} alt="menu right icon" />
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
