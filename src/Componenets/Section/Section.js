import React from "react";
import "./Section.css";
import { Spring, useSpring, animated } from "react-spring";

function Section(props) {
  const sectionAnime = useSpring({
    from: { transform: "scale(0.5)" },
    to: { transform: "scale(1)" },
  });
  return (
    <animated.div style={sectionAnime}>
      <div style={props.style} className="section-style">
        <h2>{props.title}</h2>
        {props.children}
      </div>
    </animated.div>
  );
}
export default Section;
