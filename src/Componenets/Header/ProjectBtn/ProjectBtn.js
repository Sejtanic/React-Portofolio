import React from "react";
import "./ProjectBtn.css";

function ProjectBtn(props) {
  const aboutHandler = () => {
    props.getData(0, 1);
  };
  return (
    <p className="project-style" onClick={aboutHandler}>
      {props.label}
    </p>
  );
}

export default ProjectBtn;
