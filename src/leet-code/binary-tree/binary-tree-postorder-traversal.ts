// https://leetcode.com/problems/binary-tree-postorder-traversal/
// left, right, root

import { BinaryTree, TreeNode } from ".";


// recursive
export function postorderTraversal(root: TreeNode | null, arr: number[] = []): number[] {
    if (!root) return [];

    postorderTraversal(root.left, arr)
    postorderTraversal(root.right, arr)
    arr.push(root.val)

    return arr;
};

export function postorderTraversal2(root: TreeNode | null): number[] {
    const output: number[] = []
    const stack: TreeNode[] = []

    if (!root) return [];

    let node: TreeNode | null = root;

    while (node || stack.length) {
        if (node) {
            stack.push(node);
            output.unshift(node.val);
            node = node.right;
        } else {
            node = (stack.pop())!.left
        }
    }

    return output;
};

describe('postorderTraversal', function() {
    it('passes test cases', () => testCases(postorderTraversal))
})

describe('postorderTraversal2', function() {
    it('passes test cases', () => testCases(postorderTraversal2))
})

function testCases(fn: (root: TreeNode | null) => number[]) {
    expect(fn(BinaryTree.fromLevelOrderArray([1,2,3,4,5]))).to.deep.equal([4,5,2,3,1]);
}
