// https://www.hackerrank.com/challenges/arrays-ds/problem

export function reverseArray(arr: number[]): number[] {
    return arr.reverse();
}

export function reverseArray2(arr: number[]): number[] {
    const len = arr.length;
    return arr.reduce((acc, val, i) => {
        acc[len - i - 1] = val;
        return acc;
    }, new Array(len));
}


describe('reverseArray', function() {
    it('passes test cases', () => testCases(reverseArray))
})
describe('reverseArray2', function() {
    it('passes test cases', () => testCases(reverseArray2))
})


function testCases(fn: (arr: number[]) => number[]) {
    expect(fn([1,2,3])).to.deep.equal([3,2,1]);
}
