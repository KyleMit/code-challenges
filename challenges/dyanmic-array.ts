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
    let lastAnswer = 0;
    let arr: number[][] = Array(n).fill(null).map(() => []);
    let answers: number[] = []

    queries.forEach(query => {
        let [type, x, y] = query
        let idx = (x ^ lastAnswer) % n
        if (type === 1) {
            arr[idx].push(y)
        } else {
            let jdx = y % arr[idx].length
            lastAnswer = arr[idx][jdx]
            answers.push(lastAnswer)
        }
    })

    return answers;
}

main();
