import React, { Component } from "react";
import "./FileZone.css";

class FileZone extends Component {
  render() {
    console.log(this.props);
    return (
      <div id="file-zone">
        <div id="file">{this.props.preparedHtml}</div>
      </div>
    );
  }
}

export default FileZone;
