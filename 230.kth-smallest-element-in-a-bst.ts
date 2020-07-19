/*
 * @lc app=leetcode id=230 lang=typescript
 *
 * [230] Kth Smallest Element in a BST
 */

// @lc code=start
 // Definition for a binary tree node.
  // class TreeNode {
  //     val: number
  //     left: TreeNode | null
  //     right: TreeNode | null
  //     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
  //         this.val = (val===undefined ? 0 : val)
  //         this.left = (left===undefined ? null : left)
  //         this.right = (right===undefined ? null : right)
  //     }
  // }

  function kthSmallest(root: TreeNode | null, k: number): number {
    const middleOrderResult = getMiddleOrderResult2(root);

    console.log(middleOrderResult, '.......')
  
    return middleOrderResult[k-1];
  };
  
  function getMiddleOrderResult(treeNode: TreeNode | null): number[] {
    if (treeNode === null) {
      return [];
    }
  
    if (treeNode.left === null && treeNode.right === null) {
      return [treeNode.val];
    }
  
    const leftChildNodeResult = getMiddleOrderResult(treeNode.left);
    const rightChildNodeResult = getMiddleOrderResult(treeNode.right);
  
    return [...leftChildNodeResult, treeNode.val, ...rightChildNodeResult];
  }
  
  function getMiddleOrderResult2(root: TreeNode | null): number[] {
    if (root === null) {
      return [];
    }

    const middleOrderResult: number[] = [];
    const treeNodeStack: TreeNode[] = [];
  
    let currentNode: TreeNode | null = root;

    while(currentNode || treeNodeStack.length !== 0) {
      while (currentNode) {
        treeNodeStack.push(currentNode);
        currentNode = currentNode && currentNode.left;
      }
  
      if(treeNodeStack.length > 0) {
        const stackNode = treeNodeStack.pop();

        if (stackNode && stackNode.val !== null &&  stackNode.val !== undefined) {
          middleOrderResult.push(stackNode.val);
          currentNode = stackNode.right;
        }
      }
    }

    return middleOrderResult;
  }
  
  interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
  }
  

// @lc code=end

