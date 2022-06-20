// https://leetcode.com/problems/validate-binary-search-tree/

import { BinaryTree, TreeNode } from ".";

export function isValidBST(root: TreeNode | null, low: number | null = null, high: number | null = null): boolean {
    if (!root) return true;

    if (low !== null && root.val <= low) return false
    if (high !== null && root.val >= high) return false

    return isValidBST(root.left, low, root.val) &&
           isValidBST(root.right, root.val, high)
};

describe('isValidBST', function() {
    it('passes test cases', function() {
        const isValidBSTArray = (arr: Array<number | null>) => isValidBST(BinaryTree.fromNullableLevelOrderArray(arr))

        expect(isValidBSTArray([2,1,3])).to.equal(true);
        expect(isValidBSTArray([5,1,4,null,null,3,6])).to.equal(false);
        expect(isValidBSTArray([5,1,6,null,null,4,7])).to.equal(false);
    })
})
