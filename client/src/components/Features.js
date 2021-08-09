import React from "react";
// import { GrLocation } from "react-icons/gr";
// import { GiCctvCamera } from "react-icons/gi";
// import { FaAward } from "react-icons/fa";
import { featuresIcons } from "../data";
import "./features.css";

const Features = () => {
  return (
    <section id="afzalliklarimiz" className="content">
      <h2 className="title">Afzalliklarimiz</h2>
      <div className="features">
        <div className="featuresSide-left">
          <p className="text featuresDescription">
            Bizning butun jamoamiz sizning fikringizni aks ettirish uchun
            ishlaydi vaqtingizning yarmini o'tkazadigan joyda individuallik
          </p>
          <ul className="list featuresList">
            {featuresIcons.map((featureIcon) => {
              const { image, description } = featureIcon;
              return (
                <li className="item featuresItem">
                  <img src={image} alt={description} />
                  <p className="text featuresDescriptionText">{description}</p>
                </li>
              );
            })}
          </ul>
          <a href="#loyihahaqida" className="headerInnerLink featuresLink">
            Loyiha haqida
          </a>
        </div>
        <img
          src="/images/features.png"
          className="featuresImg"
          alt="features"
        />
      </div>
    </section>
  );
};

export default Features;
