import { BinaryTree, TreeNode } from ".";

export function findTarget(root: TreeNode | null, k: number): boolean {
    if (!root) return false;

    const complements = new Set();
    const stack: TreeNode[] = [root]

    while (stack.length) {
        const node = stack.pop()!;

        if (complements.has(node.val)) {
            return true
        }

        complements.add(k - node.val)

        if (node.left) stack.push(node.left)
        if (node.right) stack.push(node.right)
    }

    return false;
};

describe('findTarget', function() {
    it('passes test cases', function() {
        const findTargetArray = (arr: Array<number | null>, k: number): boolean => findTarget(BinaryTree.fromNullableLevelOrderArray(arr), k)

        expect(findTargetArray([5,3,6,2,4,null,7], 9)).to.equal(true);
        expect(findTargetArray([5,3,6,2,4,null,7], 28)).to.equal(false);
    })
})
