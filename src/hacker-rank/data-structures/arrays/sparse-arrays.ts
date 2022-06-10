export function matchingStrings(strings: string[], queries: string[]): number[] {
    const stringMap = strings.reduce<Record<string, number>>((acc, cur) => {
        acc[cur] = typeof acc[cur] == "number" ? acc[cur] + 1 : 1
        return acc
    }, {})
    const queryCounts = queries.map(q => stringMap[q] ?? 0)
    return queryCounts
}

describe('matchingStrings', function() {
    it('passes test cases', function() {
        const strings = [ 'aba', 'baba', 'aba', 'xzxb' ]
        const queries = [ 'aba', 'xzxb', 'ab' ]
        const result = matchingStrings(strings, queries);
        const expected = [2,1,0]
        expect(result).to.deep.equal(expected);
    })
})

