import React from "react";
import "./Hero.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const Backgrounds = [
  {
    id: 1,
    url: "https://uicookies.com/demo/theme/resto/img/hero_bg_1.jpg",
    Title: "Wellcome",
    Title2: "To Our Resturant",
  },
  {
    id: 2,
    url: "https://uicookies.com/demo/theme/resto/img/hero_bg_2.jpg",
    Title: "Dine",
    TItle2: "With Us",
  },
  {
    id: 3,
    url: "https://uicookies.com/demo/theme/resto/img/hero_bg_3.jpg",
    Title: "Enjoy",
    TItle2: "With Us",
  },
];

const Hero = () => {
  return (
    <section className="Hero_section">
      <button className="Hero_buttons left_btn">
        
      </button>
      <div className="Hero_Content">
        <h1 className="Hero_Style_text">Enjoy</h1>
        <h1 className=" display-2 fw-bold ">WITH US</h1>
      </div>
      <button className="Hero_buttons right_btn"></button>
    </section>
  );
};

export default Hero;
