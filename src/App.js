import React, { useState } from "react";
import "./App.css";
import ControlPanel from "./control-panel/ControlPanel";
import FileZone from "./file-zone/FileZone";
import getMockText from "./text.service";
import BoldModifier from "./TextModifiers/Bold";
import ItalicModifier from "./TextModifiers/Italic";
import UnderlineModifier from "./TextModifiers/Underline";
import BgColor from "./TextModifiers/BgColor";
import FgColor from "./TextModifiers/FgColor";

const App = () => {
  const [text, setText] = useState("");

  getMockText().then(res => {
    setText(res);
  });

  return (
    <div className="App">
      <header>
        <span>Simple Text Editor V2</span>
      </header>
      <main>
        <ControlPanel
          clickOnBold={BoldModifier.trigger}
          clickOnItalic={ItalicModifier.trigger}
          clickOnUnderline={UnderlineModifier.trigger}
          clickOnBgColor={BgColor.trigger}
          clickOnFgColor={FgColor.trigger}
        />
        <FileZone text={text} />
      </main>
    </div>
  );
};

export default App;
