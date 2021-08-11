import React from "react";
import { FaTelegramPlane, FaFacebookF, FaTwitter } from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  return (
    <section id="a'loqa" className="content">
      <h2 className="title contactTitle">A'loqa</h2>
      <div className="contact">
        <div className="contactLeft">
          <a href="tel:+998712317313" style={{ textDecoration: "none" }}>
            <h1 className="title telNum">+998 71 231-73-13</h1>
          </a>
          <p className="text contactText adress">
            Toshkent viloyati, Toshkent tumani, Qizg’aldoq QFY, Alisher Navoiy
            MFY, Zebuniso ko’chasi, 20
          </p>
          <p className="text contactText  gmail">
            o’zbegimdevelopment@gmail.com
          </p>
          <div className="contactIcons">
            <a
              href="https://t.me/bak1roff"
              target="_blank"
              rel="noopener noreferrer"
              className="contactIconLink"
            >
              <FaTelegramPlane className="contactIcon" />
            </a>
            <a
              href="https://www.facebook.com/gulomjon.bakirov.7/"
              target="_blank"
              rel="noopener noreferrer"
              className="contactIconLink"
            >
              <FaFacebookF className="contactIcon" />
            </a>
            <a
              href="https://t.me/bak1roff"
              target="_blank"
              rel="noopener noreferrer"
              className="contactIconLink"
            >
              <FaTwitter className="contactIcon" />
            </a>
          </div>
        </div>
        <iframe
          className="contactRight"
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11993.749775514118!2d69.2565692!3d41.2775831!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9982cfe99165939d!2s%22O&#39;zbegim%22%20-%20Residential%20complex!5e0!3m2!1suz!2s!4v1628648795518!5m2!1suz!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
