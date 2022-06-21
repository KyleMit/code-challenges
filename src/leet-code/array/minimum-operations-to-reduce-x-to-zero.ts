// https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/

// n contiguous elements from left
// plus
// m contiguous elements from right
// should sum to number x
// return n + m

const sumArr = (arr: number[]): number => arr.reduce((acc, curr) => acc + curr, 0)

export function minOperations(nums: number[], x: number): number {
    let minDigits = Number.MAX_VALUE

    for (let i=0; i<nums.length; i++) {
        const leftPart = sumArr(nums.slice(0,i));
        if (leftPart > x) { break; }

        for (let j=0; j<nums.length; j++) {
            const rightPart = sumArr(nums.slice(nums.length-j))

            const sum = leftPart + rightPart
            if (sum > x) { break; }

            const curDigits = i + j
            if (sum == x && curDigits < minDigits) {
                minDigits = curDigits
            }
        }
    }
    return minDigits == Number.MAX_VALUE ? -1 : minDigits
};

describe('minOperations', function() {
    it('passes test cases', function() {
        expect(minOperations([1,1,4,2,3], 5)).to.deep.equal(2);
        expect(minOperations([5,2,3,1,1], 5)).to.deep.equal(1);
    })
})
