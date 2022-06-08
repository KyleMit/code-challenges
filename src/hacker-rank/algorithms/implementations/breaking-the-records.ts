export function main() {
    const input = [3,4,21,36,10,28,35,5,24,42]
    const output = breakingRecords(input)
    const expected = [4,0]
    console.log({output, expected})
}


/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores: number[]): number[] {
    let records = scores.reduce((acc, cur) => {
        if (cur > acc.maxScore) {
            acc.maxScore = cur
            acc.maxCount++
        }
        if (cur < acc.minScore) {
            acc.minScore = cur
            acc.minCount++
        }
        return acc
    }, {
        maxScore: scores[0],
        minScore: scores[0],
        maxCount: 0,
        minCount: 0
    })
    return [records.maxCount, records.minCount]
}

main()
