// https://leetcode.com/problems/reverse-integer/

export function reverse(x: number): number {
    let rev = +[...`${Math.abs(x)}`].reverse().join("") * (x < 0 ? -1 : 1)
    let maxInt = Math.pow(2,31)
    return rev > maxInt - 1 || rev < - maxInt ? 0 : rev
};

describe('reverse', function() {
    it('passes test cases', () => testCases(reverse))
})

function testCases(fn: (x: number) => number) {
    expect(fn(123)).to.equal(321);
    expect(fn(-123)).to.equal(-321);
    expect(fn(120)).to.equal(21);
    expect(fn(Math.pow(2,31) + 1)).to.equal(0);
}
