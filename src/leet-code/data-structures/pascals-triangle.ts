// https://leetcode.com/problems/pascals-triangle/


export function generate(numRows: number): number[][] {
    const result = [] as number[][]
    for (let i=0; i<numRows; i++){
        const row = Array.from({length: i+1}, (_, j) => {
            const prevRow = result[i-1] ?? []
            const prevLeft = prevRow[j-1];
            const prevRight = prevRow[j];
            const prevSum = prevLeft + prevRight || 1
            return prevSum
        })
        result.push(row)
    }
    return result;
};

describe('generatePascalsTriangle', function() {
    it('passes test cases', function() {
        expect(generate(5)).to.deep.equal([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]);
        expect(generate(1)).to.deep.equal([[1]]);

    })
})
