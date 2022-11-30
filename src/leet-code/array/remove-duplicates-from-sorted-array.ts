// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

export function removeDuplicates(nums: number[]): number {
    let arrPos = 0;
    for (let i = 0; i < nums.length; i++){

        if (nums[arrPos - 1] != nums[i]) {
            nums[arrPos] = nums[i]
            arrPos++
        }
    }

    nums.length = arrPos

    return arrPos;
};


describe('removeDuplicates', function () {
    
    [
        { input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], expected: [0, 1, 2, 3, 4] },
        { input: [1,1,2], expected: [1,2] }
    ].forEach(({ input, expected }) => {
        it('passes test cases', function () {
            let k = removeDuplicates(input);
    
            // trim to expected length
            input.length = expected.length
    
            expect(k).to.equal(expected.length)
            expect(input).to.deep.equal(expected);
        })
    })

    
})
