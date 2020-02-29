const BgColor = {
  trigger: color => {
    document.execCommand("BackColor", null, color);
  }
};
export default BgColor;
