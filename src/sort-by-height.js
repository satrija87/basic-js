const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let res = [];
  index = 0;
  let filtered = arr.filter((el) => el !== -1);
  let sortedArr = filtered.sort((a, b) => a - b);
  arr.forEach((el, ind, arr) => {
    if (arr[ind] !==-1) {
      arr[ind] = sortedArr[index];
      index++;
    }
  });return arr
}

module.exports = {
  sortByHeight,
};

