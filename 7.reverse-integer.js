/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const strX = x.toString();
  const numberPrefix = /^-/.test(strX) ? '-' : '';
  const numberMain = /\d+/.exec(strX)[0];

  const reversedNumberStr = `${numberPrefix}${numberMain.split('').reverse().join('')}`;
  const number = Number.parseInt(reversedNumberStr);

  if (number > 2)
};
// @lc code=end

