// https://leetcode.com/problems/search-a-2d-matrix/

export function searchMatrix(matrix: number[][], target: number): boolean {
    // find first greater row
    const firstGreaterIndex = matrix.findIndex(x => x[0] > target)

    // get previous row or last row
    const searchRow = matrix[firstGreaterIndex-1] ?? matrix.at(-1);

    // check if number in eligible row
    return searchRow.includes(target)
};

// refactor to use binary search

describe('searchMatrix', function() {
    it('passes test cases', function() {
        expect(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)).to.equal(true);
        expect(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13)).to.equal(false);
        expect(searchMatrix([[1]], 1)).to.equal(true);
        expect(searchMatrix([[1]], 2)).to.equal(false);
        expect(searchMatrix([[1,3]], 3)).to.equal(true);
        expect(searchMatrix([[1],[3]], 1)).to.equal(true);
    })
})
