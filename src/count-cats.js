const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let res = [];
  matrix.map((el) => {
    el.map((a) => {
      if (a == "^^") {
        return res.push(a);
      }
    });
  });
  return res.length;
}

module.exports = {
  countCats,
};

