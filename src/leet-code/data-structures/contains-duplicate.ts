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

containsDuplicate([1,1,2]) // true
containsDuplicate([1,2,3]) // false
