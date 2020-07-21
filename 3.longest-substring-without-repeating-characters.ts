/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  return lengthOfLongestSubstringWithLiner(s);
};

function lengthOfLongestSubstringWithSimplestWay(s: string): number {
  const arrayStr = s.split('');
  let lengthOfLongestSubstring: number = 0;

  for(let i = 0; i < arrayStr.length; i++) {
    if (arrayStr.length-1 - i < lengthOfLongestSubstring) {
      return lengthOfLongestSubstring;
    }

    const subString = getSubStringStartFromIndexWithIncludesImprovement(arrayStr, i);

    if (subString.length > lengthOfLongestSubstring) {
      lengthOfLongestSubstring = subString.length;
    }
  }

  return lengthOfLongestSubstring;
}

interface SubStrObj {
  startIndex: number;
  endIndex: number;
  hashKeys: { [ key: string ]: boolean }
}

function lengthOfLongestSubstringWithLiner(s: string): number {
  const arrayStr = s.split('');
  if (!arrayStr.length) {
    return 0;
  }

  // const subStrObj: SubStrObj = {
  //   startIndex: 0,
  //   endIndex: 0,
  //   hashKeys: {
  //     [arrayStr[0]]: true,
  //   }
  // };
  // let lengthOfLongestSubstring = subStrObj.endIndex - subStrObj.startIndex + 1;

  // while(subStrObj.endIndex <= arrayStr.length - 1) {
  //   if (lengthOfLongestSubstring > arrayStr.length - 1 - subStrObj.startIndex) {
  //     return lengthOfLongestSubstring;
  //   }

  //   const newEndIndex = subStrObj.endIndex + 1;
  //   const newChar = arrayStr[newEndIndex];

  //   if (!subStrObj.hashKeys[newChar]) {
  //     subStrObj.hashKeys[newChar] = true;
  //     subStrObj.endIndex = newEndIndex;
  //   } else {
  //     updateSubStringWithNewEndingIndex(subStrObj, arrayStr);
  //   }
    
  //   const newSubStrLength = subStrObj.endIndex - subStrObj.startIndex + 1;
  //   lengthOfLongestSubstring = lengthOfLongestSubstring > newSubStrLength ? lengthOfLongestSubstring : newSubStrLength;
  // }

  // return lengthOfLongestSubstring;

  const hashKeys: { [key: string]: boolean} = {};
  let lengthOfLongestSubstring = 0;
  let i = 0;
  for(let j = 0; j <= arrayStr.length - 1; j++) {
    if (lengthOfLongestSubstring > arrayStr.length - i) {
      return lengthOfLongestSubstring;
    }

    while (hashKeys[arrayStr[j]]) {
      delete hashKeys[arrayStr[i]];
      i = i + 1;
    }

    hashKeys[arrayStr[j]] = true;
    lengthOfLongestSubstring = Math.max(lengthOfLongestSubstring, Object.keys(hashKeys).length);
  }

  return lengthOfLongestSubstring;
}



function updateSubStringWithNewEndingIndex(subStrObj: SubStrObj, arrayStr: string[]): void {
  const newEndIndex = subStrObj.endIndex + 1;
  const newChar = arrayStr[newEndIndex];

  while(subStrObj.startIndex < newEndIndex) {
    subStrObj.hashKeys[arrayStr[subStrObj.startIndex]] = false;
    subStrObj.startIndex = subStrObj.startIndex + 1;

    if (!subStrObj.hashKeys[newChar]) {
      subStrObj.hashKeys[newChar] = true;
      subStrObj.endIndex = newEndIndex;
      return;
    }
  }
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

function getSubStringStartFromIndexWithIncludesImprovement(arrayStr: string[], startIndex: number) {
  const arraySubStr: string[] = [];
  const hashSubStr: { [key: string]: boolean} = {};

  for(let i = startIndex; i < arrayStr.length; i++) {
    const char = arrayStr[i];
    if (hashSubStr[char]) {
      return arraySubStr;
    } else {
      arraySubStr.push(char);
      hashSubStr[char] = true;
    }
  }

  return arraySubStr;
}

// console.log(lengthOfLongestSubstring("dvdf"));
// @lc code=end

