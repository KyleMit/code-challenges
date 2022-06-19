// https://leetcode.com/problems/binary-tree-inorder-traversal/
// left, root, right

import { BinaryTree, TreeNode } from ".";


// recursive
export function inorderTraversal(root: TreeNode | null, arr: number[] = []): number[] {
    if (!root) return [];

    inorderTraversal(root.left, arr)
    arr.push(root.val)
    inorderTraversal(root.right, arr)

    return arr;
};

export function inorderTraversal2 (root: TreeNode | null): number[] {
    const output: number[] = [];
    const stack: TreeNode[] = [];

    if (!root) { return output }

    let node: TreeNode | null = root;

    while (node || stack.length) {
        while (node) {
            stack.push(node)
            node = node.left
        }
        node = stack.pop()!;
        output.push(node.val)
        node = node.right;
    }

    return output;
};


describe('inorderTraversal', function() {
    it('passes test cases', () => testCases(inorderTraversal))
})

describe('inorderTraversal2', function() {
    it('passes test cases', () => testCases(inorderTraversal2))
})

function testCases(fn: (root: TreeNode | null) => number[]) {
    expect(fn(BinaryTree.fromLevelOrderArray([1,2,3,4,5]))).to.deep.equal([4,2,5,1,3]);
}
