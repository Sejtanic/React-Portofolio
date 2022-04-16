import React from "react";
import "./Description.css";
import { Spring, useSpring, animated } from "react-spring";

const Description = (props) => {
  const still = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 700,
  });
  const textAnime = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1100,
  });
  return (
    <animated.div style={still}>
      <div
        className="description-style"
        style={{ backgroundColor: `var(${props.color})` }}
        // style={props.style}
      >
        <animated.h2 style={textAnime}>{props.title}</animated.h2>
        <animated.p className="description" style={textAnime}>
          {props.description}
        </animated.p>
        {!props.show && (
          <animated.p style={textAnime} className="small">
            Hover over image for more info
          </animated.p>
        )}
      </div>
    </animated.div>
  );
};

export default Description;
