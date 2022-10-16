const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names ) {
  for (let a = 0; a < names.length; a++) {
    let suff = 1;
    for (let b = a + 1; b < names.length; b++) {
      if (names[a] === names[b]) names[b] += '(' + (suff++) + ')';
    }
  }
  return names;
  // remove line with error and write your code here
}

module.exports = {
  renameFiles
};
console.log(renameFiles(["file", "file", "image", "file(1)", "file"]))