export function diagonalDifference(arr: number[][]) {
    let size = arr.length;
    let diff = arr.reduce((acc, row, i) => {
        acc+= row[i] - row[size - i - 1]
        return acc
    }, 0)
    return Math.abs(diff)
}

describe('diagonalDifference', function() {
    it('passes test cases', function() {
        var matrix = [
            [ 11, 2, 4 ],
            [ 4, 5, 6 ],
            [ 10, 8, -12 ]
        ]
        expect(diagonalDifference(matrix)).to.equal(15);
    })
})

// 11 + 5 + -12 = 4
// 4 + 5 + 10 = 19
// 4 - 19 = -15
// |-15| = 15

// 11 - 4 = 7
// 5 - 5 = 0
// -12 - 10 = -22
// 7 - 22 = -15
