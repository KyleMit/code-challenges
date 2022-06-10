export function rotateLeft(d: number, arr: number[]): number[] {
   return [...arr.splice(d), ...arr]
}

describe('rotateLeft', function() {
    it('passes test cases', function() {
        expect(rotateLeft(4, [ 1, 2, 3, 4, 5 ])).to.deep.equal([ 5, 1, 2, 3, 4 ]);
    })
})
