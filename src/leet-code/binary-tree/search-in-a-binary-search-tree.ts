// https://leetcode.com/problems/search-in-a-binary-search-tree/

import { BinaryTree, TreeNode } from ".";


export function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if (!root) return null;
    if (root.val == val) return root;

    const searchNode = root.val > val ? root.left : root.right

    return searchBST(searchNode, val)
};

export function searchBST2(root: TreeNode | null, val: number): TreeNode | null {
    while (root != null && root.val != val) {
        root = root.val > val ? root.left : root.right
    }
    return root;
};


describe('searchBST', function() {
    it('passes test cases', () => testCases(searchBST))
})
describe('searchBST2', function() {
    it('passes test cases', () => testCases(searchBST2))
})

function testCases(fn: (root: TreeNode | null, val: number) => TreeNode | null) {
    const backAndForth = (arr: number[], val: number) => BinaryTree.toLevelOrderArray(searchBST(BinaryTree.fromLevelOrderArray(arr), val))

    expect(backAndForth([4,2,7,1,3], 2)).to.deep.equal([2,1,3]);
    expect(backAndForth([4,2,7,1,3], 5)).to.deep.equal([]);
}
