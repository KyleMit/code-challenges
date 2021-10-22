main();

export function main() {

    const arr = [1,2,3]
    const res = reverseArray(arr);

    console.log(res);
}

/*
 * Complete the 'reverseArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function reverseArray(arr: number[]): number[] {
    // return a.reverse();
    const len = arr.length;
    return arr.reduce((acc, val, i) => {
        acc[len - i - 1] = val;
        return acc;
    }, new Array(len));
}
