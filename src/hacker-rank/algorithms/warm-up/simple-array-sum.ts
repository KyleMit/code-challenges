export function simpleArraySum(arr: number[]): number {
    return arr.reduce((acc, cur) => acc + cur, 0)
}


describe('simpleArraySum', function() {
    it('passes test cases', function() {
        expect(simpleArraySum([1,2,3])).to.equal(6);
    })
})
