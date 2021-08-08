import React, { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openToggle = () => {
    const menuToggle = document.getElementById("menu-toggle");
    menuToggle.classList.toggle("active");
    document
      .getElementsByClassName("navbar__list")[0]
      .classList.add(!isOpen ? "navbar-open" : "navbar-close");
    document
      .getElementsByClassName("navbar__list")[0]
      .classList.remove(isOpen ? "navbar-open" : "navbar-close");
    setIsOpen(!isOpen);
    console.log();
  };

  // useEffect(() => {
  //   setIsOpen(!isOpen);
  // }, []);

  const mobile = () => {
    document.getElementById("menu-toggle").classList.remove("active");
    document
      .getElementsByClassName("navbar__list")[0]
      .classList.add(!isOpen ? "navbar-open" : "navbar-close");
    document
      .getElementsByClassName("navbar__list")[0]
      .classList.remove(isOpen ? "navbar-open" : "navbar-close");
    setIsOpen(!isOpen);
  };

  const menu = [
    "ASOSIY",
    "LOYIHA HAQIDA",
    "AFZALLIKLARIMIZ",
    "GALEREYA",
    "BLOG",
    "A'LOQA",
  ];

  return (
    <header>
      <div className="headerTop container">
        <a href="/">
          <img
            src="/images/logo.png"
            alt="O'zbegim Logo"
            className="headerLogo"
          />
        </a>
        <div className={`panel ${isOpen ? "open" : "close"}`}>
          <ul className={`navbar__list headerTopStyle `}>
            {menu.map((menuItem) => (
              <li key={menuItem} className="navbar__item">
                <a
                  href={`#${menuItem.replace(/\s/g, "").toLowerCase()}`}
                  className={`text headerTopText navbar__link `}
                  onClick={mobile}
                >
                  {menuItem}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <a
          href="tel:+998712317313"
          className="text headerTopText headerTopStyle telephoneNum"
        >
          998 71 231-73-13
        </a>
        {/* <!-- MENU-TOGGLE_RESPONSIVE --> */}

        <div class="menu-toggler">
          <svg
            id="menu-toggle"
            class="ham hamRotate ham7"
            viewBox="0 0 100 100"
            width="60"
            onClick={openToggle}
          >
            <path
              class="line top"
              d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013"
            />
            <path class="line middle" d="m 70,50 h -40" />
            <path
              class="line bottom"
              d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40"
            />
          </svg>
        </div>
      </div>
      <div className="headerInner">
        <div className="headerInnerLeft">
          <h2 className="title headerInnerTitle">
            O‘zbegim xonadonlariga xush kelibsiz
          </h2>
          <p className="text headerInnerText">
            Biz asosiy e'tiborimizni aynan sifatga va narxlarga qaratamiz,
            sizning didingizga mos tushuvchi uylarni bizdan topishingiz mumkun
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
