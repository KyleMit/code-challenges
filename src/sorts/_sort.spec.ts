import { expect } from 'chai';
import { describe, it } from 'mocha'
import { bubbleSort } from './bubble-sort'
import { insertionSort } from './insertion-sort'
import { mergeSort } from './merge-sort'
import { quickSort } from './quick-sort'
import { selectionSort } from './selection-sort'

const simple = (fn: (arr: any[]) => any[]) => {
    const input = [1,3,2];
    const output = fn(input);
    const expected = [1,2,3]
    expect(output).to.deep.equal(expected);
}

describe("bubble sort", function() {
    it('should return simple array in order', function() {
        simple(bubbleSort)
    })
})

describe("insertion sort", function() {
    it('should return simple array in order', function() {
        simple(insertionSort)
    })
})

describe("merge sort", function() {
    it('should return simple array in order', function() {
        simple(mergeSort)
    })
})

describe("quick sort", function() {
    it('should return simple array in order', function() {
        simple(quickSort)
    })
})

describe("selection sort", function() {
    it('should return simple array in order', function() {
        simple(selectionSort)
    })
})
