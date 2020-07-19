/*
 * @lc app=leetcode id=67 lang=typescript
 *
 * [67] Add Binary
 */

// @lc code=start
function addBinary(a: string, b: string): string {
  const aList = a.split('').reverse();
  const bList = b.split('').reverse();
  const loggerList = a.length - b.length ? aList : bList;
  const shortterList = a.length - b.length ? bList : aList;

  const addedList: string[] = loggerList.reduce((preState, currentNum, index) => {
    const shortterNum = shortterList[index];
    return preState;
  }, { result: [], stag: 0 });

  return addedList.reverse().join('');
};
// @lc code=end

