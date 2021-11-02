export function main() {
    const output = birthday([1, 2, 1, 3, 2], 3, 2)
    const expected = 2
    console.log({output, expected})
}

const sum = (arr: number[]) => arr.reduce((a, b) => a + b, 0)

const birthday = (squares: number[], cellSum: number, cellCount: number): number => squares
        .map((_val, i) => sum(squares.slice(i, i + cellCount)))
        .filter(n => n === cellSum)
        .length

main()
