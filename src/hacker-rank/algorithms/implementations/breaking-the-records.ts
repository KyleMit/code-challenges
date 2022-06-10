export function breakingRecords(scores: number[]): number[] {
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

describe('breakingRecords', function() {
    it('passes test cases', function() {
        expect(breakingRecords([3,4,21,36,10,28,35,5,24,42])).to.have.members([4,0]);
    })
})
