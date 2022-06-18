/*
      1
     / \
    2   3
   / \
  4   5

Depth First
* In-Order   (left, root, right) - 4 2 5 1 3
* Pre-Order  (root, left, right) - 1 2 4 5 3
* Post-Order (left, right, root) - 4 5 2 3 1

Breadth First
Level-Order - 1 2 3 4 5

![example](https://i.imgur.com/uDIBxoT.png)
*/


export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val ?? 0
        this.left = left ?? null
        this.right = right ?? null
    }
}


export class BinaryTree {
    static fromLevelOrderArray(arr: number[], i = 0): TreeNode | null {
        //if (!arr?.length) return null;
        let root = null
        if (i < arr.length) {
            root = new TreeNode(arr[i])
            root.left = this.fromLevelOrderArray(arr, 2 * i + 1)
            root.right = this.fromLevelOrderArray(arr, 2 * i + 2)
        }
        return root
    }

    static toLevelOrderArray(root: TreeNode | null): number[] {
        const arr: number[] = []

        const height = (node: TreeNode | null): number => {
            if (!node) return 0
            return Math.max(height(node.left), height(node.right)) + 1
        }

        const addCurrentLevel = (node: TreeNode | null, level: number) => {
            if (!node) return
            if (level == 1) {
                arr.push(node.val)
            } else {
                addCurrentLevel(node.left, level - 1)
                addCurrentLevel(node.right, level - 1)
            }
        }

        var h = height(root);
        for (let i = 1; i<=h; i++) {
            addCurrentLevel(root, i)
        }

        return arr;
    }
}

describe('BinaryTree', function() {
    describe('Level Order Traversal', function() {
        it('passes test cases', function() {
            const backAndForth = (arr: number[]) => BinaryTree.toLevelOrderArray(BinaryTree.fromLevelOrderArray(arr))
            expect(backAndForth([])).to.deep.equal([]);
            expect(backAndForth([1])).to.deep.equal([1]);
            expect(backAndForth([1,1,2])).to.deep.equal([1,1,2]);
            expect(backAndForth([1,2,3,4,5,6,7,8])).to.deep.equal([1,2,3,4,5,6,7,8]);
        })
    })
})
