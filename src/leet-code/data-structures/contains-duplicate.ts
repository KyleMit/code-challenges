// https://leetcode.com/problems/contains-duplicate/

// Time complexity: O(N)
// Memory complexity: O(N)
export function containsDuplicate(nums: number[]): boolean {
    const matches = new Set();

    for (const n of nums) {
        if (matches.has(n)) {
            return true;
        } else {
            matches.add(n)
        }
    }

    return false;
};


describe('containsDuplicate', function() {
    it('passes test cases', function() {
        expect(containsDuplicate([1,1,2])).to.equal(true);
        expect(containsDuplicate([1,2,3])).to.equal(false);
    })
})
