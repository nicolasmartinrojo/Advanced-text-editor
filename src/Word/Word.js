import React from "react";
import "./Word.css";
export default props => {
  return (
    <span
      className={props.classes.join(" ")}
      onClick={() => props.clearSelected(props.innerKey)}
    >
      {props.children}{" "}
    </span>
  );
};
