/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  return lengthOfLongestSubstringWithSimplestWay(s);
};

function lengthOfLongestSubstringWithSimplestWay(s: string): number {
  const arrayStr = s.split('');
  let lengthOfLongestSubstring: number = 0;

  for(let i = 0; i < arrayStr.length; i++) {
    if (arrayStr.length-1 - i < lengthOfLongestSubstring) {
      return lengthOfLongestSubstring;
    }

    const subString = getSubStringStartFromIndex(arrayStr, i);

    if (subString.length > lengthOfLongestSubstring) {
      lengthOfLongestSubstring = subString.length;
    }
  }

  return lengthOfLongestSubstring;
}

function getSubStringStartFromIndex(arrayStr: string[], startIndex: number) {
  const arraySubStr: string[] = [];
  for(let i = startIndex; i < arrayStr.length; i++) {
    const char = arrayStr[i];
    if (arraySubStr.includes(char)) {
      return arraySubStr;
    } else {
      arraySubStr.push(char);
    }
  }

  return arraySubStr;
}

// console.log(lengthOfLongestSubstring("abcabcbb"));
// @lc code=end

