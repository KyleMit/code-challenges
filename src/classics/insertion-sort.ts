/*

Time Complexity:  O(n2)
Space Complexity: O(1)

* start by comparing the 2nd element with the 1st, swap if necessary
* iterate through the rest of the array
* for each element, iterate through the sorted portion of the array, and insert this element where it needs to be by making comparisons

*/

export const insertionSort = (arr: any[]) => {
    for (let i = 1; i < arr.length; i++) {
        // compare current element with every element before it
        for (let j = i-1; j > -1; j--) {
            // swap if needed
            if (arr[j + 1] < arr[j]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }
        }
    }
    return arr;
}

describe("insertionSort", function() {
    it('should return simple array in order', function() {
        expect(insertionSort([1,3,2])).to.deep.equal([1,2,3]);
    })
})
