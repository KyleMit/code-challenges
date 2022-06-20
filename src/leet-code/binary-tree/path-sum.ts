// https://leetcode.com/problems/path-sum/

import { TreeNode, BinaryTree } from ".";

const isLeafNode = (node: TreeNode) => !node.left && !node.right

export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) return false;

    // decrement target by current value
    targetSum -= root.val

    // if we're on a leaf, check for matching target
    if (isLeafNode(root)) return targetSum == 0

    // otherwise, return true if found in left or right
    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};

describe('hasPathSum', function() {
    it('passes test cases', function() {
        const hasPathSumArray = (arr: Array<number | null>, targetSum: number) => hasPathSum(BinaryTree.fromNullableLevelOrderArray(arr), targetSum)

        expect(hasPathSumArray([5,4,8,11,null,13,4,7,2,null,null,null,1], 22)).to.equal(true);
        expect(hasPathSumArray([1,2,3], 5)).to.equal(false);
    })
})
