export function main() {
    let arr = [
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 0, 2, 4, 4, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 1, 2, 4, 0]
    ];

    const result: number = hourglassSum(arr);

    console.log(result)
}

let sum = (arr: number[]) => arr.reduce((a, b) => a + b, 0)
let flatten = (arr: any[][]): any[] => arr.reduce((acc, val) => acc.concat(val), []);

/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */
function hourglassSum(arr: number[][]): number {
    const size = arr.length - 2;
    const glasses = new Array(size).fill(null).map((_, row) => {
        return new Array(size).fill(null).map((_, col) => {
            return [
                arr[row+0][col+0], arr[row+0][col+1], arr[row+0][col+2],
                                   arr[row+1][col+1],
                arr[row+2][col+0], arr[row+2][col+1], arr[row+2][col+2]
            ]
        })
    })
    const sums = flatten(glasses).map(sum)
    const maxSum = Math.max(...sums)
    return maxSum
}

main();
