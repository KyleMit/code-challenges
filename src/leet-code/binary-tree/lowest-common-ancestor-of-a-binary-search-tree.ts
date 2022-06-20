// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

import { BinaryTree, TreeNode } from ".";

export function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (!p || !q || !root) return null;

    // node's don't know parents
    // check if node contains both children
    const nodeContainsVal = (node: TreeNode | null, val: number): boolean => {
        if (!node) return false
        if (node.val === val) return true
        const child = node.val > val ? node.left : node.right
        return nodeContainsVal(child, val)
    }

    const nodeContainsBothValues = (node: TreeNode | null, val1: number, val2: number): boolean =>
        nodeContainsVal(node, val1) && nodeContainsVal(node, val2)



    let match = root;

    let node: TreeNode | null = root;
    while (node) {
        if (nodeContainsBothValues(root, p.val, q.val)) {
            match = node
        } else {
            return match
        }

        // then check if left or right do, if they do, keep going
        if (p.val > match.val && q.val > match.val) {
            node = match.right
        } else if (p.val < match.val && q.val < match.val) {
            node = match.left
        } else {
            return match
        }
    }

    return match;
};

// assumes solution exists
export function lowestCommonAncestor2(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    while (root) {
        if (p!.val > root.val && q!.val > root.val) {
            root = root.right
        } else if (p!.val < root.val && q!.val < root.val) {
            root = root.left
        } else {
            return root
        }
    }
    return root
};

describe('lowestCommonAncestor', function() {
    it('passes test cases', function() {

    })
})
describe('lowestCommonAncestor', function() {
    it('passes test cases', () => testCases(lowestCommonAncestor))
})
describe('lowestCommonAncestor2', function() {
    it('passes test cases', () => testCases(lowestCommonAncestor2))
})

function testCases(fn: (root: TreeNode | null, p: TreeNode | null, q: TreeNode | null) => TreeNode | null) {
    const lowestCommonAncestorArray = (arr: Array<number | null>, p: number, q: number): number | null =>
        fn(BinaryTree.fromNullableLevelOrderArray(arr), new TreeNode(p), new TreeNode(q))!.val

    expect(lowestCommonAncestorArray([2,1], 2, 1)).to.equal(2);
    expect(lowestCommonAncestorArray([6,2,8,0,4,7,9,null,null,3,5], 2, 8)).to.equal(6);
    expect(lowestCommonAncestorArray([6,2,8,0,4,7,9,null,null,3,5], 2, 4)).to.equal(2);
}
