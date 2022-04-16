import React from "react";
import "./Foter.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact-style">
        <a
          href="https://www.instagram.com/haris.sejtanic/"
          target={"_blank"}
          className="insta"
        >
          Instagram
        </a>
        <p>sejtanicharis@gmail.com</p>
        <a href="https://www.linkedin.com/in/haris-sejtanic/" target={"_blank"}>
          linkedIn
        </a>
      </div>
      <p className="copyright">&copy; 2022 HARIS ŠEJTANIĆ</p>
    </div>
  );
};
export default Footer;
