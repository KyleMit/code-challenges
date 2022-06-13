// https://leetcode.com/problems/binary-search/
// https://leetcode.com/explore/learn/card/binary-search/
// https://en.wikipedia.org/wiki/Binary_search_algorithm
// https://stackoverflow.com/q/22697936/1366033

export function search(nums: number[], target: number): number {
    return nums.indexOf(target);
};

export function search2(nums: number[], target: number): number {
    if (!nums?.length) { return -1 }

    var left = 0;                // lo/start
    var right = nums.length - 1; // hi/end

    while (left<=right) {
        // prevent (left + right) overflow
        var mid = Math.floor(left + (right-left) / 2)

        if (nums[mid] === target) { return mid }

        if (nums[mid] < target) {
            left = mid + 1  // search right
        }
        else {
            right = mid - 1  // search left
        }
    } // exit left > right


    return -1;
};
export function search3(arr: number[], val: number, start = 0, end = arr.length -1): number {
    const mid = Math.floor(start + (end-start) / 2)

    if (arr[mid] == val) { return mid }
    if (start >=end) { return -1 }

    return val < arr[mid]
        ? search3(arr, val, start, mid - 1)
        : search3(arr, val, mid + 1, end)
};


describe('binarySearch', function() {
    it('passes test cases', () => testCases(search))
})
describe('binarySearch2', function() {
    it('passes test cases', () => testCases(search2))
})
describe('binarySearch3', function() {
    it('passes test cases', () => testCases(search3))
})

function testCases(fn: (nums: number[], target: number) => number) {
    expect(fn([-1,0,3,5,9,12], 9)).to.equal(4);
    expect(fn([-1,0,3,5,9,12], 10)).to.equal(-1);
    expect(fn([], 10)).to.equal(-1);
}
