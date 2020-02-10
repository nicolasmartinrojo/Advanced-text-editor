import React, { Component } from "react";
import "./App.css";
import ControlPanel from "./control-panel/ControlPanel";
import FileZone from "./file-zone/FileZone";
import getMockText from "./text.service";
import Word from "./Word/Word";
import { removeClass, addClass } from "./utils";
import BoldModifier from "./TextModifiers/Bold/Bold";
import ItalicModifier from "./TextModifiers/Italic/Italic";
import UnderlineModifier from "./TextModifiers/Underline/Underline";

class App extends Component {
  state = { preparedHtml: "", textInformation: [] };

  constructor(props) {
    super(props);
    this.getText();
  }

  async getText() {
    const mockedText = await getMockText();
    let textInformation = [];
    mockedText.split(" ").map((word, index) =>
      textInformation.push({
        word: word,
        innerKey: index,
        classes: []
      })
    );
    this.setState({ ...this.state, textInformation: textInformation });
    this.updateText();
  }

  updateText() {
    let preparedHtml = [];
    this.state.textInformation.map(wordInformation =>
      preparedHtml.push(
        <Word
          key={wordInformation.innerKey}
          innerKey={wordInformation.innerKey}
          clearSelected={this.clearSelected}
          classes={wordInformation.classes}
          inlineStyle={wordInformation.inlineStyle}
        >
          {wordInformation.word}
        </Word>
      )
    );
    this.setState({
      ...this.state,
      preparedHtml: preparedHtml
    });
  }

  clearSelected = innerKey => {
    let newState = this.state;
    newState.textInformation.map(wordInformation =>
      removeClass(wordInformation.classes, "selected")
    );
    addClass(newState.textInformation[innerKey].classes, "selected");
    this.setState(newState);
    this.updateText();
  };

  clickOnBold = () => {
    this.clickOnModifier(BoldModifier);
  };

  clickOnItalic = () => {
    this.clickOnModifier(ItalicModifier);
  };
  clickOnUnderline = () => {
    this.clickOnModifier(UnderlineModifier);
  };

  clickOnModifier = modifier => {
    let newState = this.state;
    const word = newState.textInformation.find(wordInformation =>
      wordInformation.classes.includes("selected")
    );
    if (word) {
      modifier.applyModifier(word.classes);
      this.setState(newState);
      this.updateText();
    }
  };
  render() {
    return (
      <div className="App">
        <header>
          <span>Simple Text Editor</span>
        </header>
        <main>
          <ControlPanel
            clickOnBold={this.clickOnBold}
            clickOnItalic={this.clickOnItalic}
            clickOnUnderline={this.clickOnUnderline}
          />
          <FileZone preparedHtml={this.state.preparedHtml} />
        </main>
      </div>
    );
  }
}

export default App;
