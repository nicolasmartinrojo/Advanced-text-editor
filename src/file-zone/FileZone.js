import React, { useState } from "react";
import "./FileZone.css";
import SynonymsPanel from "../Synonyms/SynonymsPanel";

const FileZone = ({ text }) => {
  const [selectedText, setSelectedText] = useState("");
  const replaceWord = replacementText => {
    var sel, range;
    if (window.getSelection) {
      sel = window.getSelection();
      if (sel.rangeCount) {
        range = sel.getRangeAt(0);
        range.deleteContents();
        range.insertNode(document.createTextNode(replacementText.trim() + " "));
      }
    } else if (document.selection && document.selection.createRange) {
      range = document.selection.createRange();
      range.text = replacementText.trim() + " ";
    }
  };
  return (
    <div id="file-zone">
      <div
        id="file"
        contentEditable="true"
        suppressContentEditableWarning={true}
        onKeyUp={() => {
          setSelectedText(window.getSelection().toString());
        }}
        onClick={() => {
          setSelectedText(window.getSelection().toString());
        }}
        onBlur={e => {
          e.target.focus();
        }}
      >
        {text}
      </div>

      <SynonymsPanel selectedText={selectedText} replaceWord={replaceWord} />
    </div>
  );
};

export default FileZone;
