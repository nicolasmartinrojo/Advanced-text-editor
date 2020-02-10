import "./Bold.css";
import { toggleClass } from "../../utils";

const BoldModifier = {
  applyModifier: classes => {
    toggleClass(classes, "bold");
  }
};
export default BoldModifier;
