import "./Italic.css";
import { toggleClass } from "../../utils";

const ItalicModifier = {
  applyModifier: classes => {
    toggleClass(classes, "italic");
  }
};
export default ItalicModifier;
