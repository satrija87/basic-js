const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {};
  let reversedArr = domains
    .map((el) => {
      return el.split(".").reverse();
    })
    .map((el) => {
      let key = "";
      return el.map((elem) => {
        key += `.${elem}`;
        res[key] !== undefined ? res[key]++ : (res[key] = 1);
      });
    });

  return res;
}

module.exports = {
  getDNSStats,
};
console.log(getDNSStats(["code.yandex.ru", "music.yandex.ru", "yandex.ru"]));
