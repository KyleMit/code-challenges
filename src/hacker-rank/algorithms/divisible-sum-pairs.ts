// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

export function divisibleSumPairs(n: number, k: number, ar: number[]): number {
    const result = [];
    for (let i = 0; i < ar.length; i++){
        for (let j = i + 1; j < ar.length; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                result.push([i,j])
            }
        }
    }
    return result.length;
}

describe('divisibleSumPairs', function() {
    it('passes test cases', function() {
        expect(divisibleSumPairs(6, 5, [1,2,3,4,5,6])).to.equal(3);
    })
})
