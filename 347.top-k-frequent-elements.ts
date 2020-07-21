/*
 * @lc app=leetcode id=347 lang=typescript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
  const numberFrequent: { [key: number]: number} = {};
  const distinctNumberList: number[] = [];

  for(const num of nums) {
    if (numberFrequent[num]) {
      numberFrequent[num] = numberFrequent[num] + 1;
    } else {
      numberFrequent[num] = 1;
      distinctNumberList.push(num);
    }
  }

  let topKFrequent: number[] = [];
  const getValueByTreeIndex = (treeIndex: number, arrayTree: number[]) => {
    const key = arrayTree[treeIndex];
    return numberFrequent[key];
  };
  for(const num of distinctNumberList) {
    topKFrequent = pushElementToSortedTree(topKFrequent, num, k, numberFrequent, getValueByTreeIndex);
  }

  return topKFrequent;
};

function pushElementToSortedTree(
  sortedTree: number[], num: number, length: number, numberFrequent: { [key: number]: number},
  getValueByTreeIndex: (treeIndex: number, arrayTree: number[]) => number): number[] {

  if (sortedTree.length >= length) {
    sortedTree = sortedTree.slice(0, length);

    const lastTreeNodeValue = getValueByTreeIndex(sortedTree.length - 1, sortedTree);
    if (numberFrequent[num] > lastTreeNodeValue) {
      sortedTree[length - 1] = num;
    }
  } else {
    sortedTree.push(num);
  }

  let currentElementIndex = sortedTree.length - 1;
  let parentIndex = Math.floor((currentElementIndex - 1) / 2);

  while(getValueByTreeIndex(currentElementIndex, sortedTree) > getValueByTreeIndex(parentIndex, sortedTree) && parentIndex >= 0) {
    const temp = sortedTree[currentElementIndex];
    sortedTree[currentElementIndex] = sortedTree[parentIndex];
    sortedTree[parentIndex] = temp;

    currentElementIndex = parentIndex;
    parentIndex = Math.floor((currentElementIndex - 1) / 2);
  }

  return sortedTree;
}

function getValueByKey(nodeKey: number, numberFrequent: { [key: number]: number}): number {
  return numberFrequent[nodeKey];
}

console.log(topKFrequent([-1,1,4,-4,3,5,4,-2,3,-1], 3))

// @lc code=end

