// https://leetcode.com/problems/invert-binary-tree/

import { BinaryTree, TreeNode } from ".";

export function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null;
    // swap left / right
    const { left, right } = root;
    root.left = right;
    root.right = left;

    // invert left, invert right
    invertTree(root.left)
    invertTree(root.right)

    return root
};

describe('invertTree', function() {
    it('passes test cases', function() {
        const backAndForth = (arr: number[]) => BinaryTree.toLevelOrderArray(invertTree(BinaryTree.fromLevelOrderArray(arr)))

        expect(backAndForth([1])).to.deep.equal([1]);
        expect(backAndForth([1,2,3])).to.deep.equal([1,3,2]);
    })
})
