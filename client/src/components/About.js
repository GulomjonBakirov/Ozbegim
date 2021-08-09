import React, { useState, useEffect } from "react";
import data from "../data.js";
import "./about.css";

const About = () => {
  const [building, setBuilding] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = building.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, building]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section id="loyihahaqida" className="content about">
      <div>
        <h2 className="title aboutTitle">Loyiha haqida</h2>
        <p className="text aboutText">
          O‘zbekona stildagi qurilgan zamonaviy uy
        </p>
      </div>
      <div className="slider">
        {building.map((building, buildingIndex) => {
          const { id, image, description } = building;
          console.log(image);

          let position = "nextSlide";
          if (buildingIndex === index) {
            position = "activeSlide";
          }
          if (
            buildingIndex === index - 1 ||
            (index === 0 && buildingIndex === building.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={`${position} mainContent`} key={id}>
              <img src={image} className="buildingImg" alt={image} />
              <p className="text description">{description}</p>
            </article>
          );
        })}
        <div className="slideDivider">
          <button className="prev" onClick={() => setIndex(index - 1)}>
            <img src="/images/prev.png" className="prevImg" alt="prev" />
          </button>
          <button
            className="next nextIndicator"
            onClick={() => setIndex(index + 1)}
          >
            <p className="indicator">{index + 1} / 4</p>
            <img src="/images/next.png" className="nextImg" alt="prev" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
