import React from "react";
import "./FileZone.css";

const FileZone = ({ text }) => {
  return (
    <div id="file-zone">
      <div
        id="file"
        contentEditable="true"
        suppressContentEditableWarning={true}
      >
        {text}
      </div>
    </div>
  );
};

export default FileZone;
