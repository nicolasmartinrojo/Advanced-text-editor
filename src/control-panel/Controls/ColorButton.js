import React from "react";

export default ({ handler }) => {
  return (
    <input
      type="color"
      onChange={e => {
        handler(e.target.value);
      }}
    />
  );
};
