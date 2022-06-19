
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
    static parseLevelOrderArray = (arr: number[]) => this.fromLevelOrderArray(arr)
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

    static traverseTreeInLevelOrder = (root: TreeNode | null) => this.toLevelOrderArray(root)
    static toLevelOrderArray(root: TreeNode | null): number[] {
        const arr: number[] = []

        const addCurrentLevel = (node: TreeNode | null, level: number) => {
            if (!node) return
            if (level == 1) {
                arr.push(node.val)
            } else {
                addCurrentLevel(node.left, level - 1)
                addCurrentLevel(node.right, level - 1)
            }
        }

        var levels = this.height(root);
        for (let i = 1; i<=levels; i++) {
            addCurrentLevel(root, i)
        }

        return arr;
    }

    static toPreOrderArray(root: TreeNode | null): number[] {
        const arr: number[] = []
        // TODO
        return arr;
    }

    static height(node: TreeNode | null): number {
        if (!node) return 0
        return Math.max(this.height(node.left), this.height(node.right)) + 1
    }

    static format(root: TreeNode | null): string {

        return ""
    }
}

