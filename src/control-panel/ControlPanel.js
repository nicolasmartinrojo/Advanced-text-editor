import React from "react";
import "./ControlPanel.css";
import ControlButton from "./ControlButton";

export default ({ clickOnBold, clickOnItalic, clickOnUnderline }) => {
  return (
    <div id="control-panel">
      <div id="format-actions">
        <ControlButton text="B" handler={clickOnBold} />
        <ControlButton text="I" handler={clickOnItalic} />
        <ControlButton text="U" handler={clickOnUnderline} />
        <input
          type="color"
          onChange={e => {
            document.execCommand("foreColor", null, e.target.value);
          }}
        />
        <input
          type="color"
          onChange={e => {
            document.execCommand("BackColor", null, e.target.value);
          }}
        />
      </div>
    </div>
  );
};
