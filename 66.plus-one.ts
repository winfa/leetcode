/*
 * @lc app=leetcode id=66 lang=typescript
 *
 * [66] Plus One
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  const newDigits: number[] = [...digits];
  for(let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      newDigits[i] = 0;

      if (i === 0) {
        return [1, ...newDigits];
      }
    } else {
      newDigits[i] = digits[i] + 1;
      return newDigits;
    }
  }

  return newDigits;
};
// @lc code=endwe