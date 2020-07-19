/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  const sResult: {[key: string]: number} = {};
  const tResult: {[key: string]: number} = {};

  for (const char of s) {
    if (sResult[char] === undefined) {
      sResult[char] = 1;
    } else {
      sResult[char] = sResult[char] + 1;
    }
  }

  for (const char of t) {
    if (tResult[char] === undefined) {
      tResult[char] = 1;
    } else {
      tResult[char] = tResult[char] + 1;
    }
  }

  return isObjectSame(sResult, tResult);
};

function isObjectSame(aObject: {[key: string]: number}, bObject: {[key: string]: number}): boolean {
  const bContainsA = !Object.keys(aObject).some(key => bObject[key] !== aObject[key]);
  const aContainsB = !Object.keys(bObject).some(key => bObject[key] !== aObject[key]);

  return bContainsA && aContainsB;
}

// @lc code=end

