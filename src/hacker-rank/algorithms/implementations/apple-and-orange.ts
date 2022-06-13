// https://www.hackerrank.com/challenges/apple-and-orange/problem

export function countApplesAndOranges(
    houseStart: number,
    houseEnd: number,
    applePos: number,
    orangePos: number,
    apples: number[],
    oranges: number[]
): number[] {
    let onHouse = (pos: number) => pos >= houseStart && pos <= houseEnd
    let fruitOnHouse = [
        apples.map(a => applePos + a).filter(onHouse).length,
        oranges.map(o => orangePos + o).filter(onHouse).length
    ]
    return fruitOnHouse
}


describe('countApplesAndOranges', function() {
    it('passes test cases', function() {
        expect(countApplesAndOranges(7, 11, 5, 15, [ -2, 2, 1 ], [ 5, -6 ])).to.have.members([1,1]);
    })
})
