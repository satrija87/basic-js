const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let add = options.addition || null;
  let repeatStr = options.repeatTimes || 1;
  let repeatAdd = options.additionRepeatTimes || 1;
  let sepStr = options.separator || "+";
  let sepAdd = options.additionSeparator || "|";

  let bigStr = "";
  function addRepeat(add) {
    return (bigStr = Array(repeatAdd).fill(add).join(sepAdd));
  }

  return Array(repeatStr)
    .fill(str + `${addRepeat(add)}`)
    .join(sepStr);
}

module.exports = {
  repeater,
};
console.log(
  repeater(true, {
    repeatTimes: 3,
    separator: "??? ",
    addition: false,
    additionRepeatTimes: 2,
    additionSeparator: "!!!",
  })
);
