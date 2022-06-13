/*

Time Complexity:  O(n2)
Space Complexity: O(1)

* start iterating through the array, comparing 2 elements at a time
* swap them as required
* at the end of the first pass, the largest number has bubbled to the last index of the array, so ignore the last index in the next pass
* continue these passes until the array is sorted
*/

export const bubbleSort = (arr: any[]): any[] => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            let cur = arr[j], next = arr[j+1]
            // if cur el is bigger than next, swap
            if (cur > next) {
                [arr[j + 1], arr[j]] = [cur, next];
            }

        }
    }
    return arr;
}

export const bubbleSortCheckSwaps = (arr: any[]): any[] => {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j + 1] < arr[j]) {
                // Swap
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
                noSwaps = false;
            }
        }
        if (noSwaps) return arr;
    }
    return arr;
}

describe('bubbleSort', function() {
    it('passes test cases', () => testCases(bubbleSort))
})
describe('bubbleSortCheckSwaps', function() {
    it('passes test cases', () => testCases(bubbleSortCheckSwaps))
})

function testCases(fn: (arr: any[]) => any[]) {
    expect(fn([1,3,2])).to.deep.equal([1,2,3]);
}
