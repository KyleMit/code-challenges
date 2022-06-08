/*

Time Complexity:  O(n*log n)
Space Complexity: O(1) or O(n)

* use recursion to split array into halves, until all sub-arrays are length 0 or 1
* combine sorted sub-arrays while maintaining order
*/

const mergeSortedArrays = (arr1: any[], arr2: any[]): any[] => {
    // make a new combined array and pointers to input array position
    const result: any[] = [];
    let i = 0;
    let j = 0;

    // loop until either arr1 or arr2 is empty
    while (i < arr1.length && j < arr2.length) {
        // check for smallest el, push and increment
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i])
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    // add the rest of the remaining subarray to our new array
    while (i < arr1.length) {
        result.push(arr1[i])
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}

export const mergeSort = (arr: any[]): any[] => {
    // base case
    if (arr.length <= 1) return arr;

    // splitting into to halves
    const mid = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))

    return mergeSortedArrays(left, right);
}
