export function main() {
    const d = 4
    const arr = [ 1, 2, 3, 4, 5 ]
    const result: number[] = rotateLeft(d, arr);
    console.log(result)
}

/*
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function rotateLeft(d: number, arr: number[]): number[] {
   return [...arr.splice(d), ...arr]
}



main();
