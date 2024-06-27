import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import "./Header.css";

const Header = () => {
  const [Toggle, ShowMenu] = useState(true);
  return (
    <header className="header py-4 ">
      <nav className="nav container d-flex justify-content-between px-2">
        <a href="#Home" className="nav__logo text-decoration-none">
          Res<span className="Cafe">to</span>
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list list-unstyled m-0">
            <li className="nav__item ">
              <a
                href="#Home"
                className="nav__link active-link text-decoration-none"
              >
                WELLCOME
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link text-decoration-none">
                SPECIALITIES
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link text-decoration-none">
                MENU
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link text-decoration-none">
                RESERVATION
              </a>
            </li>
            <li className="nav__item">
              <a href="#Portfolio" className="nav__link text-decoration-none">
                EVENTS
              </a>
            </li>
            <li className="nav__item">
              <a href="#Contact" className="nav__link text-decoration-none">
                CONTACT
              </a>
            </li>
          </ul>
          <IoCloseSharp
            className="nav_close nav__icon"
            onClick={() => ShowMenu(!Toggle)}
          />
        </div>

        <div className="nav__toggle" onClick={() => ShowMenu(!Toggle)}>
          <TiThMenu className="fs-1 text-white" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
