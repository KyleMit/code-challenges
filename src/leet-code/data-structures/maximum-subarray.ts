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

maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) // 6
maxSubArray([1]) // 1
maxSubArray([5,4,-1,7,8]) // 23
