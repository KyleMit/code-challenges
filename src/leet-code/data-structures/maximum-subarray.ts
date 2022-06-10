// https://leetcode.com/problems/maximum-subarray/
// https://en.wikipedia.org/wiki/Maximum_subarray_problem


function sum(nums: number[]): number {
    return nums.reduce((acc,cur) => acc + cur, 0)
}

export function maxSubArray(nums: number[]): number {
    let maxTotal = nums[0];
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j <= nums.length; j++) {
            const subArr = nums.slice(i, j)
            const curSum = sum(subArr)
            if (curSum > maxTotal) {
                maxTotal = curSum
            }
        }
    }
    return maxTotal
};

export function maxSubArray2(nums: number[]): number {
    let curSum = nums[0]; // max ending here
    let maxSum = nums[0]; // max so far
    for (let i = 1; i < nums.length; i++) {
        const n = nums[i]
        curSum = Math.max(curSum, curSum + n)
        maxSum = Math.max(maxSum, curSum)
    }
    return maxSum
};

describe('maxSubArray', function() {
    it('passes test cases', () => testCases(maxSubArray))
})
describe('maxSubArray2', function() {
    it('passes test cases', () => testCases(maxSubArray2))
})

function testCases(fn: (nums: number[]) => number) {
    expect(fn([-2,1,-3,4,-1,2,1,-5,4])).to.equal(6);
    expect(fn([1])).to.equal(1);
    expect(fn([5,4,-1,7,8])).to.equal(23);
}

