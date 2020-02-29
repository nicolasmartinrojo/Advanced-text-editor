const FgColor = {
  trigger: color => {
    document.execCommand("foreColor", null, color);
  }
};
export default FgColor;
