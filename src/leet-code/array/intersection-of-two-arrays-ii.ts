// https://leetcode.com/problems/intersection-of-two-arrays-ii/

// Time Complexity: O(n + m)
export function intersect(nums1: number[], nums2: number[]): number[] {
    // get histogram of number distribution
    const nums1Freq = nums1.reduce((acc, cur) => {
        acc.set(cur, (acc.get(cur) ?? 0) + 1)
        return acc
    }, new Map())

    // find matches in nums2
    const result = nums2.reduce((acc, cur) => {
        if (nums1Freq.get(cur) > 0) {
            // got a hit, add to result and decrement
            acc.push(cur)
            nums1Freq.set(cur, nums1Freq.get(cur) - 1)
        }
        return acc
    }, [] as number[])
    return result
};

describe('intersect', function() {
    it('passes test cases', function() {
        expect(intersect([1,2,2,1], [2,1])).to.deep.equal([2,1]);
        expect(intersect([1,2,2,1], [2,1,3,2])).to.deep.equal([2,1,2]);
    })
})
