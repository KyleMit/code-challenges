// https://leetcode.com/problems/merge-sorted-array/
// https://www.youtube.com/watch?v=0PHGaGma6j8


export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    // remove empty slots
    nums1.splice(m)

    let nums1Pos = 0;
    let nums2Pos = 0;

    while (nums1Pos < m + n && nums2Pos < n) {
        const nums1Val = nums1[nums1Pos];
        const nums2Val = nums2[nums2Pos];

        if (nums1Val !== undefined && nums1Val < nums2Val) {
            // just increment nums 1 cursor
            nums1Pos++
        } else {
            // insert 2 into 1 and increment cursor on 2
            nums1.splice(nums1Pos, 0, nums2Val)
            nums1Pos++
            nums2Pos++
        }
    }

    // return nums1; mutate in-place
};


merge([1,2,3,0,0,0], 3, [2,5,6], 3) // [1,2,2,3,5,6]
merge([1],1,[],0) // [1]
