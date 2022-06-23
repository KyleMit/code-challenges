import { MinHeap } from ".";

describe('MinHeap', function() {
    it('passes test cases', function() {

        const heap = new MinHeap()

        heap.push(6,4,2); // [2,4,6]

        expect(heap.peek()).to.equal(2)
        expect(heap.pop()).to.equal(2)  // [4,6]

        heap.push(3) // [3,4,6]

        expect(heap.size()).to.equal(3)
        expect(heap.peek()).to.equal(3)

    })
})
