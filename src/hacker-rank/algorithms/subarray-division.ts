// https://www.hackerrank.com/challenges/the-birthday-bar/problem

const sum = (arr: number[]) => arr.reduce((a, b) => a + b, 0)

export const birthday = (squares: number[], cellSum: number, cellCount: number): number => squares
        .map((_val, i) => sum(squares.slice(i, i + cellCount)))
        .filter(n => n === cellSum)
        .length;

describe('birthday', function() {
    it('passes test cases', function() {
        expect(birthday([1, 2, 1, 3, 2], 3, 2)).to.equal(2);
    })
})
