// https://leetcode.com/problems/reshape-the-matrix/


export function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    const flatReversed = mat.flat().reverse();

    // if not possible, return original
    if (flatReversed.length != r * c) {
        return mat;
    }

    var result = [] as number[][]
    for (let i=0; i<r; i++) {
        var row = [] as number[]
        for (let j=0; j<c; j++) {
            row.push(flatReversed.pop() as number)
        }
        result.push(row)
    }
    return result
};

describe('matrixReshape', function() {
    it('passes test cases', function() {
        expect(matrixReshape([[1,2],[3,4]], 1, 4)).to.deep.equal([[1,2,3,4]]);
        expect(matrixReshape([[1,2],[3,4]], 2, 2)).to.deep.equal([[1,2],[3,4]]);
        expect(matrixReshape([[1,2],[3,4]], 2, 4)).to.deep.equal([[1,2],[3,4]]);
    })
})
