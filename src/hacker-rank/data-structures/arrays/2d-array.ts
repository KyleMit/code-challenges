// https://www.hackerrank.com/challenges/2d-array/problem

export function hourglassSum(arr: number[][]): number {
    const size = arr.length - 2;
    const glasses = new Array(size).fill(null).map((_, row) => {
        return new Array(size).fill(null).map((_, col) => {
            return [
                arr[row+0][col+0], arr[row+0][col+1], arr[row+0][col+2],
                                   arr[row+1][col+1],
                arr[row+2][col+0], arr[row+2][col+1], arr[row+2][col+2]
            ]
        })
    })
    const sums = flatten(glasses).map(sum)
    const maxSum = Math.max(...sums)
    return maxSum
}

let sum = (arr: number[]) => arr.reduce((a, b) => a + b, 0)
let flatten = (arr: any[][]): any[] => arr.reduce((acc, val) => acc.concat(val), []);


describe('hourglassSum', function() {
    it('passes test cases', function() {
        let arr = [
            [1, 1, 1, 0, 0, 0],
            [0, 1, 0, 0, 0, 0],
            [1, 1, 1, 0, 0, 0],
            [0, 0, 2, 4, 4, 0],
            [0, 0, 0, 2, 0, 0],
            [0, 0, 1, 2, 4, 0]
        ];
        expect(hourglassSum(arr)).to.equal(19);
    })
})
