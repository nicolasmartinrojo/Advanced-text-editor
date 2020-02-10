import "./Underline.css";
import { toggleClass } from "../../utils";

const UnderlineModifier = {
  applyModifier: classes => {
    toggleClass(classes, "underline");
  }
};
export default UnderlineModifier;
