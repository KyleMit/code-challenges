// https://leetcode.com/problems/maximum-depth-of-binary-tree/

import { BinaryTree, TreeNode } from ".";

export function maxDepth(root: TreeNode | null): number {
    if(!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

describe('maxDepth', function() {
    it('passes test cases', function() {
        expect(maxDepth(BinaryTree.fromLevelOrderArray([]))).to.equal(0);
        expect(maxDepth(BinaryTree.fromLevelOrderArray([1]))).to.equal(1);
        expect(maxDepth(BinaryTree.fromLevelOrderArray([1,1,2]))).to.equal(2);
    })
})
