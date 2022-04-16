import { is } from "@react-spring/shared";
import React from "react";
import { NavLink } from "react-router-dom";
import AboutBtn from "./AboutBtn/AboutBtn";
import "./Header.css";
import ProjectBtn from "./ProjectBtn/ProjectBtn";

function Header(props) {
  return (
    <div className="header-style">
      <div className="name-style">
        <p>HARIS</p>
        <p className="last-name">ŠEJTANIĆ</p>
      </div>
      <div className="nav-style">
        <NavLink
          style={({ isActive }) => {
            return {
              transition: "0.2s",
              borderBottom: isActive ? "1px solid black" : "none",
            };
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              borderBottom: isActive ? "1px solid black" : "none",
            };
          }}
          to="/about"
        >
          About
        </NavLink>
        {/* <ProjectBtn getData={props.getAbout} label={"PROJECTS"} />
        <AboutBtn getData={props.getAbout} label={"ABOUT"} /> */}
      </div>
    </div>
  );
}
export default Header;
