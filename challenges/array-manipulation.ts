export function main() {
    // const n = 5
    // const queries = [
    //     [ 1, 2, 100 ],
    //     [ 2, 5, 100 ],
    //     [ 3, 4, 100 ]
    // ]
    // const expected = 200
    const n = 10
    const queries = [
        [ 2, 6, 8 ],
        [ 3, 5, 7 ],
        [ 1, 8, 1 ],
        [ 5, 9, 15 ]
    ]
    const expected = 31
    const result = arrayManipulation(n, queries);
    console.log({result, expected});
}

/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function arrayManipulation(n: number, queries: number[][]): number {
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

main()


