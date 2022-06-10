export function staircase(n: number) {
    let stairs = Array.from({length: n}, (_, i) => {
        return " ".repeat(n - i - 1) + "#".repeat(i + 1)
    })
    return stairs
}

describe('staircase', function() {
    it('passes test cases', function() {
        var output =     [
            "     #",
            "    ##",
            "   ###",
            "  ####",
            " #####",
            "######",
        ]
        expect(staircase(6)).to.deep.equal(output);
    })
})
