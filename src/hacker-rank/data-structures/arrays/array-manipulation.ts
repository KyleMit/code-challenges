// https://www.hackerrank.com/challenges/crush/

export function arrayManipulation(n: number, queries: number[][]): number {
    const slopes = queries.reduce((acc, query) => {
        const [a, b, k] = query;
        acc[a-1] += k
        acc[b] -= k
        return acc
    }, Array(n + 1).fill(0))

    let maxValue = 0
    let runningCount = 0
    slopes.forEach(val => {
        runningCount += val
        maxValue = Math.max(runningCount, maxValue)
    })
    return maxValue
}

describe('arrayManipulation', function() {

    it('passes test cases where n = 5', function() {
        const n = 5
        const queries = [
            [ 1, 2, 100 ],
            [ 2, 5, 100 ],
            [ 3, 4, 100 ]
        ]
        const expected = 200
        const result = arrayManipulation(n, queries);
        expect(result).to.equal(expected);
    })

    it('passes test cases where n = 10', function() {
        const n = 10
        const queries = [
            [ 2, 6, 8 ],
            [ 3, 5, 7 ],
            [ 1, 8, 1 ],
            [ 5, 9, 15 ]
        ]
        const expected = 31
        const result = arrayManipulation(n, queries);
        expect(result).to.equal(expected);
    })
})
