/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  if (!strs?.length) {
    return "";
  }
  const firstStr: string = strs[0];
  const prefixStr: string[] = [];

  const arrayFirstStr = firstStr.split('');
  for(let i=0; i < arrayFirstStr.length; i++) {
    if (!charIsTheSameForAPostion(strs, i)) {
      return prefixStr.join('');
    }
    prefixStr.push(arrayFirstStr[i]);
  }

  return prefixStr.join('');
};

function charIsTheSameForAPostion(strs: string[], positionIndex: number): boolean {
  const charOnPostionForFirstStr = strs[0][positionIndex];
  const notMatchedStr = strs.some((str: string) => str[positionIndex] !== charOnPostionForFirstStr);

  console.log(notMatchedStr, '....');

  return !notMatchedStr;
}
// @lc code=end

