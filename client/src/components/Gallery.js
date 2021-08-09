import React, { useState } from "react";
import "./gallery.css";

const Gallery = () => {
  const [active, setActive] = useState(false);
  const images = [
    {
      id: 1,
      img: "/images/gallery/gallery3.png",
      width: 565,
      height: 370,
    },
    {
      id: 2,
      img: "/images/gallery/gallery4.png",
      width: 499,
      height: 550,
    },
    {
      id: 3,
      img: "/images/gallery/gallery1.png",
      width: 565,
      height: 550,
    },
    {
      id: 4,
      img: "/images/gallery/gallery2.png",
      width: 500,
      height: 365,
    },
  ];

  const styleFunc = () => {
    const style = [];
    images.map((img) => {
      style.push({ width: `${img.width}`, height: `${img.height}` });
    });
    return style;
  };
  const styles = styleFunc();
  const setAnimation = () => {
    const icon = document.getElementsByClassName("moreIcon");
    icon[0].classList.add(!active ? "iconLoading" : "icon1");
    icon[0].classList.remove(active ? "iconLoading" : "icon1");
    setActive(!active);
  };

  return (
    <section id="galereya" className="content">
      <h2 className="title galleryTitle">Galereya</h2>
      <p className="text galleryText">Tayyor uylarning namunalari</p>
      <div className="gallery">
        {images.map((img) => (
          <img
            src={img.img}
            className="galleryImages"
            key={img.id}
            alt={img.img}
            style={{
              width: `45%`,
              height: `${styles[img.id - 1].height}px`,
            }}
          />
        ))}
      </div>
      <a href="#more" className="more" onClick={setAnimation}>
        <img src="/images/refresh.png" className="moreIcon" alt="refresh" />
        <p className="text moreText">ko‘proq ko‘rish</p>
      </a>
    </section>
  );
};

export default Gallery;
