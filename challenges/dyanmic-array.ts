export function main() {

    const n = 2
    const queries = [
        [ 1, 0, 5 ],
        [ 1, 1, 7 ],
        [ 1, 0, 3 ],
        [ 2, 1, 0 ],
        [ 2, 1, 1 ]
    ]

    const result: number[] = dynamicArray(n, queries);

    console.log(result)
}


/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function dynamicArray(n: number, queries: number[][]): number[] {
    // Write your code here

}

main();
