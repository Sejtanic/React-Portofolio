import React from "react";
import "./Wrap.css";

function Wrap(props) {
  return <div className="wrap-style">{props.children}</div>;
}
export default Wrap;
