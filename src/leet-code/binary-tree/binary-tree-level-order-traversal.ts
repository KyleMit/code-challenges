// https://leetcode.com/problems/binary-tree-level-order-traversal/

import { TreeNode, BinaryTree } from ".";

// recursion
export function levelOrder(root: TreeNode | null): number[][] {
    const levels: number[][] = [];
    if (!root) return levels;

    const visit = (node: TreeNode, level: number): void => {
        // initialize current level
        if  (!levels[level]) {
            levels[level] = []
        }

        // add value to current level
        levels[level].push(node.val)

        if (node.left)  { visit(node.left, level + 1) }
        if (node.right) { visit(node.right, level + 1) }
    }

    // initialize base case
    visit(root, 0)

    return levels

};

// iteration
export function levelOrder2(root: TreeNode | null): number[][] {
    const levels: number[][] = [];
    if (!root) return levels;


    let queue: TreeNode[] = [];
    queue.push(root)

    while (queue.length) {
        const curLevel: number[] = []
        const nextQueue: TreeNode[] = [];

        for (let i=0, len=queue.length; i<len; i++) {
            const node = queue[i]

            curLevel.push(node.val);

            if (node.left)  { nextQueue.push(node.left) }
            if (node.right) { nextQueue.push(node.right) }
        }

        levels.push(curLevel)
        queue = nextQueue;
    }

    return levels

};

describe('levelOrder', function() {
    it('passes test cases', () => testCases(levelOrder))
})
describe('levelOrder2', function() {
    it('passes test cases', () => testCases(levelOrder2))
})

function testCases(fn: (root: TreeNode | null) => number[][]) {
    expect(fn(BinaryTree.fromLevelOrderArray([]))).to.deep.equal([]);
    expect(fn(BinaryTree.fromLevelOrderArray([1]))).to.deep.equal([[1]]);
    expect(fn(BinaryTree.fromLevelOrderArray([1,1,2]))).to.deep.equal([[1],[1,2]]);
}
