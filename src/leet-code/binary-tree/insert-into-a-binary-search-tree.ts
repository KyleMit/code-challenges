// https://leetcode.com/problems/insert-into-a-binary-search-tree/

import { TreeNode, BinaryTree } from ".";

export function insertIntoBST(root: TreeNode | null, val: number): TreeNode {
    if (!root) return new TreeNode(val);
    // search for node until we get left - append where we get null
    let node: TreeNode | null = root;
    while (node) {
        const child: TreeNode | null = node.val > val ? node.left : node.right;
        if (!child) {
            // reached, the end, append and leave
            if (node.val > val) {
                node.left = new TreeNode(val)
            } else {
                node.right = new TreeNode(val)
            }
            return root
        }
        // start search again with child
        node = child;
    }
    return root;
};

describe('insertIntoBST', function() {
    it('passes test cases', function() {
        const insertIntoBSTArray = (arr: Array<number | null>, targetSum: number) => BinaryTree.toLevelOrderArray(insertIntoBST(BinaryTree.fromNullableLevelOrderArray(arr), targetSum))

        expect(insertIntoBSTArray([4,2,7,1,3], 5)).to.deep.equal([4,2,7,1,3,5]);
        expect(insertIntoBSTArray([], 5)).to.deep.equal([5]);
    })
})
