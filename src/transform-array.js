const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(array) {
  if (!Array.isArray(array)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  let arrNew = array.slice();
  return arrNew.reduce((res, el, ind, arr) => {
    if (el === "--discard-next" && arr[ind + 1] !== "undefined") {
      arr[ind] = null;
      arr[ind + 1] = null;
    }
    else if (el === "--discard-prev" && arr[ind - 1] !== "undefined") {
      arr[ind] = null;
      arr[ind - 1] = null;
    }
    else if (el === "--double-next" && ind === arr.length - 1) {
      arr[ind] = null;
      arr[ind + 1] = null;
    }
    else if (el === "--double-next" && arr[ind + 1] !== "undefined") {
      arr[ind] = arr[ind + 1];
    }
    else if (el === "--double-prev" && ind === 0) {
      arr[ind] = null;
      arr[ind - 1] = null;
    }
    else if (el === "--double-prev" && arr[ind - 1] !== "undefined") {
      arr[ind] = arr[ind - 1];
    }

    return arr.filter((el) => el !== null);
  }, []);

  // remove line with error and write your code here
}

module.exports = {
  transform,
};


