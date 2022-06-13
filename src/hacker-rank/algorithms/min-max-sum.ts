// https://www.hackerrank.com/challenges/mini-max-sum/problem

export function miniMaxSum(arr: number[]): number[] {
    let sorted = arr.sort()
    let total = arr.reduce((acc, cur) => acc + cur, 0)
    let minMax = [total - sorted[arr.length - 1], total - arr[0]]
    return minMax;
}


export function miniMaxSum2(arr: number[]): number[] {
    let values = arr.reduce((acc, cur) => {
        if (cur < acc.min) acc.min = cur;
        if (cur > acc.max) acc.max = cur;
        acc.sum += cur
        return acc
    }, {
        min: Number.MAX_VALUE,
        max: Number.MIN_VALUE,
        sum: 0
    })
    let minMax = [
        values.sum - values.max,
        values.sum - values.min
    ]
    return minMax;
}

export function miniMaxSum3(arr: number[]): number[] {
    let min = arr[0], max = 0, sum = 0
    for (let i = 0; i < arr.length; i++) {
        let cur = arr[i]
        if (cur < min) min = cur;
        if (cur > max) max = cur;
        sum += cur
    }
    let minMax = [sum - max, sum - min]
    return minMax;
}


describe('miniMaxSum', function() {
    it('passes test cases', () => testCases(miniMaxSum))
})
describe('miniMaxSum2', function() {
    it('passes test cases', () => testCases(miniMaxSum2))
})
describe('miniMaxSum3', function() {
    it('passes test cases', () => testCases(miniMaxSum3))
})

// perf tests
// https://jsbench.me/aokv7drxqs/1
function testCases(fn: (arr: number[]) => number[]) {
    expect(fn([1, 2, 3, 4, 5])).to.deep.equal([10,14]);
}
