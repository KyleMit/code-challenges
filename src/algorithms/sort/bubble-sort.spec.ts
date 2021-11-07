import { expect } from 'chai';
import { bubbleSort } from './bubble-sort'

describe("bubble sort", function() {
    it('should return simple array in order', function() {
        const input = [1,3,2];
        const output = bubbleSort(input);
        const expected = [1,2,3]
        expect(output).to.deep.equal(expected);
    })
})
