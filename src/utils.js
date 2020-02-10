const removeClass = (arr, what) => {
  var found = arr.indexOf(what);

  while (found !== -1) {
    arr.splice(found, 1);
    found = arr.indexOf(what);
  }
};

const addClass = (arr, what) => {
  arr.push(what);
};

const toggleClass = (array, elem) => {
  var index = array.indexOf(elem);
  if (index > -1) {
    array.splice(index, 1);
  } else {
    addClass(array, elem);
  }
};
export { removeClass, addClass, toggleClass };
