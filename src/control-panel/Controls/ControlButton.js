import React from "react";

export default ({ text, handler }) => {
  return (
    <button className="format-action" type="button" onClick={() => handler()}>
      <b>{text}</b>
    </button>
  );
};
