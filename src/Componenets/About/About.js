import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <>
      <Header />
      <div className="about-container-style">
        <div className="about-info">
          <div className="info-styles">
            <div className="style-one">
              <h2>Skills</h2>
              <p>HTML CSS SASS</p>
              <p>JAVASCRIPT </p>
              <p>REACTJS (REDUX, ROUTER)</p>
              <p>GIT GITHUB</p>
            </div>
          </div>
          <div className="info-content-styles">
            <h2>About Me</h2>
            <p>
              My aspiration to become best version of myself lead me to become
              self taught programmer.My goal is to learn and to perfect my
              skills by working with best of the best.As a long-standing fitness
              lover and coach i used discipline that i acquired in that field to
              learn programing skills which i used to create projects which you
              can check in <Link to="/">Home</Link> to arranged in a way that u
              can see my learning curve.
            </p>
            <br></br>
            <p className="p-style">Fell free to contact me</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default About;
