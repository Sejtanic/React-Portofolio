import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card">
        <div
          className="front-side"
          style={{
            background: ` url(${props.image}) no-repeat  center center/cover`,
            backgroundSize: "contain",
          }}
        ></div>
        <div className="back-side">
          <h2>{props.title}</h2>
          <p>{props.description} </p>

          <br></br>
          <a href={props.linkSite} target={"_blank"}>
            Click here to visit Website
          </a>
          <a href={props.linkGithub} target={"_blank"}>
            Check code in GitHub
          </a>
        </div>
      </div>
    </div>
  );
};
export default Card;
