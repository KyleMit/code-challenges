/*

Time Complexity:  O(n2)
Space Complexity: O(1)

* find the smallest el, put in first position
* find the smallest el in the remaining arr, put in next position
*/

export const selectionSort = (arr: any[]) => {
    let minIdx;
    for (let i = 0; i < arr.length; i++) {
        minIdx = i; // seed min with cur idx
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }

        // swap if new min found
        if (minIdx !== i) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        }
    }
    return arr;
}

describe("selectionSort", function() {
    it('should return simple array in order', function() {
        expect(selectionSort([1,3,2])).to.deep.equal([1,2,3]);
    })
})
