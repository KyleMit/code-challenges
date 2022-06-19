// https://leetcode.com/problems/symmetric-tree/

import { BinaryTree, TreeNode } from ".";

export function isSymmetric(root: TreeNode | null): boolean {
    const isMirror = (t1: TreeNode | null, t2: TreeNode | null): boolean => {
        if (!t1 && !t2) return true;
        if (!t1 || !t2) return false;
        return (t1.val == t2.val)
            && isMirror(t1.right, t2.left)
            && isMirror(t1.left, t2.right)
    }
    return isMirror(root, root)
};

describe('isSymmetric', function() {
    it('passes test cases', function() {
        expect(isSymmetric(BinaryTree.fromLevelOrderArray([1]))).to.equal(true);
        expect(isSymmetric(BinaryTree.fromLevelOrderArray([1,2,2]))).to.equal(true);
        expect(isSymmetric(BinaryTree.fromLevelOrderArray([1,1,2]))).to.equal(false);
    })
})
