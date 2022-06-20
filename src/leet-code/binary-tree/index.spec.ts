import { BinaryTree } from ".";


describe('BinaryTree', function() {
    describe('Level Order Traversal', function() {
        it('passes test cases', function() {
            const backAndForth = (arr: number[]) => BinaryTree.toLevelOrderArray(BinaryTree.fromLevelOrderArray(arr))
            expect(backAndForth([])).to.deep.equal([]);
            expect(backAndForth([1])).to.deep.equal([1]);
            expect(backAndForth([1,1,2])).to.deep.equal([1,1,2]);
            expect(backAndForth([1,2,3,4,5,6,7,8])).to.deep.equal([1,2,3,4,5,6,7,8]);
        })

        it('works with nullable values', function() {
            const backAndForth = (arr: Array<number|null>) => BinaryTree.toLevelOrderArray(BinaryTree.fromNullableLevelOrderArray(arr))
            expect(backAndForth([])).to.deep.equal([]);
            expect(backAndForth([1])).to.deep.equal([1]);
            expect(backAndForth([5,4,8,11,null,13,4])).to.deep.equal([5,4,8,11,13,4]);

        })
    })

//     describe('Print Binary Tree', function() {
//         let printTree = (arr: number[]): string => BinaryTree.format(BinaryTree.fromLevelOrderArray(arr))

//         it('prints simple tree', function() {
//             var input = [1,2,3]
//             var expected =
// ` 1
//  / \
// 2   3`
//             expect(printTree(input)).to.equal(expected);
//         })
//     })
})
