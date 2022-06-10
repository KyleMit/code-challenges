// https://leetcode.com/problems/two-sum/

export function twoSum(nums: number[], target: number): number[] {
    for (let i=0; i < nums.length; i++) {
        for (let j=i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) return [i,j]
        }
    }
    return [0,0]
};


export function twoSum2(nums: number[], target: number): number[] {
    const complements = new Map();

    for (let i=0; i < nums.length; i++) {
        const num = nums[i];

        if (complements.has(num)) {
            return [i, complements.get(num)]
        }

        complements.set(target - num, i)
    }
    return [0,0]
};

describe('twoSum', function() {
    it('passes test cases', () => testCases(twoSum))
})
describe('twoSum2', function() {
    it('passes test cases', () => testCases(twoSum2))
})

function testCases(fn: (nums: number[], target: number) => number[]) {
    expect(fn([2,7,11,15], 9)).to.have.members([0,1]);
}

