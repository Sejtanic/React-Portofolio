import React from "react";
import "./AboutBtn.css";

function AboutBtn(props) {
  const aboutHandler = () => {
    props.getData(1, 0);
  };
  return (
    <p className="about-style" onClick={aboutHandler}>
      {props.label}
    </p>
  );
}
export default AboutBtn;
