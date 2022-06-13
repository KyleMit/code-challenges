/*

Time Complexity: O(Log n)
Space Complexity: O(Log n)

* choose a pivot, store it's in index
* loop through the arr, if the cur element is less than the pivot, increment the pivot index

*/

const partition = (arr: any[], start: number, end: number): number => {
    // Let's choose the pivot to be the arr[start] element
    let pivotEl = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivotEl) {
            swapIdx++;
            // Swap current element with the element at the new pivot index
            [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
        }
    }

    // Swap the pivot element with the element at the pivotIndex index
    [arr[swapIdx], arr[start]] = [arr[start], arr[swapIdx]];

    // Return the index of the pivot element after swapping
    return swapIdx;
}

const quickSortRecurse = (arr: any[], left: number, right: number): any[] => {
    // Base case is that the left and right pointers don't overlap, after which we'll be left with an array of 1 item
    if (left < right) {
        let pivotIndex = partition(arr, left, right);

        // For left subarray, which is everything to the left of the pivot element
        quickSortRecurse(arr, left, pivotIndex - 1);

        // For the right sub array, which is everything to the right of the pivot element
        quickSortRecurse(arr, pivotIndex + 1, right);
    }
    // Return the array, when it's of length 1 i.e, left === right
    return arr;
}

export const quickSort = (arr: any[]): any[] =>
    quickSortRecurse(arr, 0, arr.length - 1);


describe("quickSort", function() {
    it('should return simple array in order', function() {
        expect(quickSort([1,3,2])).to.deep.equal([1,2,3]);
    })
})
