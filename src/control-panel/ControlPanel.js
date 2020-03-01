import React from "react";
import "./ControlPanel.css";
import ControlButton from "./Controls/ControlButton";
import ColorButton from "./Controls/ColorButton";

export default ({
  clickOnBold,
  clickOnItalic,
  clickOnUnderline,
  clickOnFgColor,
  clickOnBgColor
}) => {
  return (
    <div id="control-panel">
      <div id="format-actions">
        <ControlButton text="B" handler={clickOnBold} />
        <ControlButton text="I" handler={clickOnItalic} />
        <ControlButton text="U" handler={clickOnUnderline} />
        <ColorButton handler={clickOnFgColor} />
        <ColorButton handler={clickOnBgColor} />
      </div>
    </div>
  );
};
