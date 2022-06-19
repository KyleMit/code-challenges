// https://leetcode.com/problems/binary-tree-preorder-traversal/
// root, left, right

import { BinaryTree, TreeNode } from ".";


// recursive
export function preorderTraversal(root: TreeNode | null, arr: number[] = []): number[] {
    if (!root) return [];

    arr.push(root.val)

    preorderTraversal(root.left, arr)
    preorderTraversal(root.right, arr)

    return arr;
};

// iterative
export function preorderTraversal2(root: TreeNode | null): number[] {
    const stack: TreeNode[] = []
    const output: number[] = []

    if (!root) { return output }

    stack.push(root);

    while (stack.length > 0) {
        const node = stack.pop()!;

        output.push(node.val)

        if (node.right) { stack.push(node.right) }
        if (node.left)  { stack.push(node.left) }
    }

    return output;

};

// Morris traversal
export function preorderTraversal3(root: TreeNode | null): number[] {
    const output: number[] = []

    if (!root) { return output }

    let node: TreeNode | null = root;

    while (node) {
        if (!node.left) {
            output.push(node.val);
            node = node.right
        } else {
            let predecessor: TreeNode | null = node.left;

            while (predecessor.right && predecessor.right != node) {
                predecessor = predecessor.right
            }

            if (!predecessor.right) {
                output.push(node.val)
                predecessor.right = node;
                node = node.left;
            } else {
                predecessor.right = null;
                node = node.right;
            }
        }
    }

    return output;

};


describe('preorderTraversal', function() {
    it('passes test cases', () => testCases(preorderTraversal))
})
describe('preorderTraversal2', function() {
    it('passes test cases', () => testCases(preorderTraversal2))
})
describe('preorderTraversal3', function() {
    it('passes test cases', () => testCases(preorderTraversal3))
})


function testCases(fn: (root: TreeNode | null) => number[]) {
    expect(fn(BinaryTree.fromLevelOrderArray([1,2,3]))).to.deep.equal([1,2,3]);
    expect(fn(BinaryTree.fromLevelOrderArray([1,2,3,4,5,6]))).to.deep.equal([1,2,4,5,3,6]);
}
